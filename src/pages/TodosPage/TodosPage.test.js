import React from 'react'

// import API mocking utilities from Mock Service Worker
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, waitFor, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import ReactDOM from 'react-dom';
import { TodosPage } from './TodosPage';
import { act } from 'react-dom/test-utils'
import userEvent from "@testing-library/user-event";


const server = setupServer(
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.json([{"id":"anyId","title":"samsepi0l","completed":false}]));
  }),
  rest.post('/todos/add', (req, res, ctx) => {
    return res(ctx.json([{"id":"anyId","title":"my-new-todo","completed":false}]));
  }),
)

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});


describe('render TodosPage', () => {
  
  it("before loading data from server", () => {
    act(() => {
      ReactDOM.render(<TodosPage />, container);
    });
    const { asFragment } = render(<TodosPage />);
    expect(asFragment(<TodosPage />)).toMatchSnapshot();
  });
  
  it('loading and displaying todos', async () => {
    act(() => {
      ReactDOM.render(<TodosPage url="/todos" />, container);
    });
    await waitFor(() => screen.findByText('TodoList'));
    expect(await screen.findByText(/samsepi0l/i)).toBeInTheDocument();
  });
  
  it('adding todo to page', async () => {
    act(() => {
      ReactDOM.render(<TodosPage url="/todos/add" />, container);
    });
    userEvent.type(screen.getByRole("textbox"), "my-new-todo");
    userEvent.type(screen.getByRole('textbox'), '{enter}');
    expect(await screen.findByText(/my-new-todo/i)).toBeInTheDocument();
  });
  
})







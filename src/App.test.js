import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './components/App';


describe("App", () => {
  it("render App component les3", () => {
    render(<App />);
    screen.debug();
    expect(screen.getByText(/New todo/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your todo')).toBeInTheDocument();
  });
});

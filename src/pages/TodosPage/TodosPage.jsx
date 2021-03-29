import React, { useState, useEffect } from 'react';

import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';

export const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch('/todos');
      const json = await response.json();
      setTodos(json);
    }
    fetchTodo();
  }, []);

  const addTodoHandler = async (title) => {
    const response = await fetch('/todos/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title })

    });
    const json = await response.json();
    setTodos(json);
  }

  
  const toggleHandler = async (id) => {
    const response = await fetch(`/todos/${id}/update`, {
      method: 'PUT'
    })
    const json = await response.json();
    setTodos(json);
  }

  const deleteHandler = async (id) => {
    const response = await fetch(`/todos/${id}/delete`, {
      method: 'DELETE'
    });
    const json = await response.json();
    setTodos(json);
  }

  return (
    <>
      <TodoForm
        onAdd={addTodoHandler}
      />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onDelete={deleteHandler}
      />
    </>
  )
}
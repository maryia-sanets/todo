import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';

export const TodosPage = () => {
const [todos, setTodos] = useState([]);

const addTodoHandler = (title) => {
  const newTodo = {
    title: title,
    id: uuidv4(),
    completed: false,
  }
  setTodos((prev) => [newTodo, ...prev]);
}

const toggleHandler = (id) => {
  setTodos(prev => prev.map(todo => {
    if(todo.id === id) {
      return {...todo, completed: !todo.completed}
    }
    return todo;
  }));
}

const deleteHandler = (id) => {
  setTodos(prev => [...prev].filter(todo => todo.id !== id));
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
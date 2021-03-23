import React, { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './TodoList.scss';

const cx = classnames.bind(styles);

export const TodoList = ({ todos, onToggle, onEdit, onDelete }) => {

  if (todos.length === 0) {
    return (
      <p>
        Your todo list is emptys
      </p>
    )
  }

  return (
    <ul className={cx('todo-list')}>
      {todos.map((todo) =>
        <li className={cx('todo-list-item')} key={todo.id}>
          <div>
            <input
              className={cx('todo-list-checkbox')}
              type='checkbox'
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span
              className={cx('todo-list-title', { 'todo-list-title__checked': todo.completed })}
            >{todo.title}</span>
          </div>
          <button
            className={cx('todo-list-btn')}
            onClick={() => onDelete(todo.id)}
          >Delete</button>
        </li>
      )}
    </ul>
  );
}
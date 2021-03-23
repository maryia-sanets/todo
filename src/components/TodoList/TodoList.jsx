import React, { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './TodoList.scss';

const cx = classnames.bind(styles);

export const TodoList = ({ todos, onToggle, onDelete }) => {

  return (
    <>
      {
        todos.length
          ? (<ul className={cx('todo-list')}>
            {todos.map((todo) => {

              const { title, id, completed } = { ...todo }
              return (
                <li className={cx('todo-list-item')} key={id}>
                  <div>
                    <input
                      className={cx('todo-list-checkbox')}
                      type='checkbox'
                      checked={todo.completed}
                      onChange={() => onToggle(id)}
                    />
                    <span
                      className={cx('todo-list-title', { 'todo-list-title__checked': completed })}
                    >{title}</span>
                  </div>
                  <button
                    className={cx('todo-list-btn')}
                    onClick={() => onDelete(id)}
                  >Delete</button>
                </li>
              )
            }

            )}
          </ul>)
          : (<p>Your todo list is emptys</p>)
      }
    </>
  );
}
import React, { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './TodoForm.scss';

const cx = classnames.bind(styles);

export const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  }

  return (
    <form
      className={cx('form-field')}
      onSubmit={submitHandler}
    >
      <label
        htmlFor="todo"
        className={cx('form-field-label')}
      >New todo</label>
      <input
        className={cx('form-field-input')}
        type="text"
        placeholder='Enter your todo'
        value={title}
        onChange={handleChange}
      />
    </form>
  );
}
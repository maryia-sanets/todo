import React, { useState } from 'react';
import classnames from 'classnames/bind';

import styles from './TodoForm.scss';

const cx = classnames.bind(styles);

export const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handlerKeyDown = (event) => {
    if(event.key === 'Enter') {
      onAdd(title);
      event.target.value = '';
    }
  }

   return (
    <div className={cx('form-field')}>
      <label 
        htmlFor="todo"
        className={cx('form-field-label')}
      >New todo</label>
      <input
        className={cx('form-field-input')}
        type="text"
        placeholder='Enter your todo'
        id='todo'
        onChange={handleChange}
        onKeyDownCapture={handlerKeyDown}
      />
    </div>
  );
}
import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './Header.scss';

const cx = classnames.bind(styles);

export const Header = () => {
  return (
    <nav>
      <div className={cx('header')}>
        <h1
          className={cx('header-name')}
        >Todo app</h1>
        <ul
          className={cx('header-list')}
        >
          <li
            className={cx('header-list-item')}
          >
            <NavLink to='/'>Todos</ NavLink>
          </li>
          <li
            className={cx('header-list-item')}
          >
            <NavLink to='/about'>About</ NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

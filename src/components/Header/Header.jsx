import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './Header.scss';

const cx = classnames.bind(styles);

export const Header = () => {

  const [links, setLinks] = useState([{ to: '/', name: 'Todos' }, { to: '/about', name: 'About' }]);

  return (
    <nav>
      <div className={cx('header')}>
        <h1
          className={cx('header-name')}
        >Todo app</h1>
        <ul className={cx('header-list')}>
          {
            links.map((link, index) => {
              const { to, name } = { ...link };
              return (
                <li className={cx('header-list-item')} key={index}>
                  <NavLink to={to}>{name}</NavLink>
                </li>)
            })
          }
        </ul>
      </div>
    </nav>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from '../../components/App/App.scss';

const cx = classnames.bind(styles);

export const AboutPage = () => {
  return (
    <>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem natus consequuntur placeat et 
        obcaecati ducimus molestiae! Perferendis, dignissimos error odio dolorum placeat, nesciunt ut fugiat natus, 
        doloremque quae tempora.</p>
      <Link className={cx('btn')} to='/'>Bact to TodoPage</Link>
    </>
  )
}
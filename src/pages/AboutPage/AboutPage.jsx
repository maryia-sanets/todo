import React from 'react';
import { useHistory} from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from '../../components/App/App.scss';

const cx = classnames.bind(styles);

export const AboutPage = () => {
  const history = useHistory();
  return (
    <>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem natus consequuntur placeat et 
        obcaecati ducimus molestiae! Perferendis, dignissimos error odio dolorum placeat, nesciunt ut fugiat natus, 
        doloremque quae tempora.</p>
      <button className={cx('btn')} onClick={() => history.push('/')}>Bact to TodoPage</button>
    </>
  )
}
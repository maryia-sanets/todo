import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './App.scss';

import { Header } from '../Header';
import {AboutPage} from '../../pages/AboutPage';
import {TodosPage} from '../../pages/TodosPage';

const cx = classnames.bind(styles);

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={cx('container')}>
        <Switch>
          <Route exact path='/' component={TodosPage}/>
          <Route path='/about' component={AboutPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

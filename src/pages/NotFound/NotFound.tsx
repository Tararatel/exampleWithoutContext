import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

function NotFound(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default NotFound;

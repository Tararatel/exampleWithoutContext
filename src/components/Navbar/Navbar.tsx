import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar(): JSX.Element {
  return (
    <nav className={styles.wrapper}>
      <Link to="/">Card List</Link>
      <Link to="/add-post">Add Post</Link>
    </nav>
  );
}

export default Navbar;

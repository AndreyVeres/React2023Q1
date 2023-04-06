import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navBar.module.scss';

export function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
      <Link to={'/form'}> FORM </Link>
    </nav>
  );
}

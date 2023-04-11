import { NavBar } from 'components/navBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.scss';

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
    </nav>
  );
}

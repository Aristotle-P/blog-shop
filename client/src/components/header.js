import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';

const header = () => {
  return (
    <header className="header">
      <ul className="nav-bar">
        <li className="logo-item">
          <Link to="/">
            <LogoSvg className="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </header>
  );
};

export default header;

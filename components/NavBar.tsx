import React from 'react';

import Link from 'next/link';

import { Navigation } from './DataBase';

import { NavBarStyle } from '../styles/NavBar';

const NavBar = () => {
  return (
    <NavBarStyle>
      <div className="logo">NextApp</div>
      <div className="link">
        {Navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </NavBarStyle>
  );
};

export default NavBar;

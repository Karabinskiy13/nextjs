import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { NavBarStyle } from '../styles/NavBar';

const NavBar = () => {
  const navigation = [
    {
      id: 1,
      path: '/',
      title: 'Home'
    },
    {
      id: 2,
      path: '/posts',
      title: 'Posts'
    },
    {
      id: 3,
      path: '/contacts',
      title: 'Contacts'
    }
  ];
  return (
    <NavBarStyle>
      <div className="logo">NextApp</div>
      <div className="link">
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </NavBarStyle>
  );
};

export default NavBar;

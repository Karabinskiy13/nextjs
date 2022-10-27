import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
  const pathname = useRouter();
  const navigation = [
    {
      id: 1,
      path: '/',
      title: 'Home'
    },
    {
      id: 2,
      path: 'posts',
      title: 'Posts'
    },
    {
      id: 3,
      path: 'contacts',
      title: 'Contacts'
    }
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>NextApp</div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link className={pathname === path ? styles.active : null} key={id} href={path}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

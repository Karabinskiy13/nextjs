import React from 'react';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';

const Hello = () => (
  <div className={styles.wrapper}>
    <Heading text="NextJS Application" />
  </div>
);

export default Hello;

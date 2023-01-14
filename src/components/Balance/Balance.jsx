import React from 'react';
import styles from './Balance.module.scss';
import logo from '../assets/logo.svg';

export default function Chart({ amount }) {
  return (
    <section className={styles.balance}>
      <p>My balance</p>
      <p className={styles.number}>${amount}</p>
    </section>
  );
}

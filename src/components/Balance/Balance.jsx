import React from 'react';
import styles from './Balance.module.scss';

export default function Chart({ amount }) {
  return (
    <section className={styles.balance}>
      <div>My balance</div>
      <p>${amount}</p>
    </section>
  );
}

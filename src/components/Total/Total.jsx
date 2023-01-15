import React from 'react';
import styles from './Total.module.scss';

export default function Total({ total }) {
  return (
    <section className={styles.totals}>
      <hr />
      <h2>Total this month</h2>
      <div className={styles.totals_group}>
        <p className={styles.total}>${total}</p>
        <div>
          <p className={styles.percent}>+2.4%</p>
          <p className={styles.month}>from last month</p>
        </div>
      </div>
    </section>
  );
}

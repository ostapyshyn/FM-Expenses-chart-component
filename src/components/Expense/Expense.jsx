import React from 'react';
import Graph from '../Graph';
import Total from '../Total';
import styles from './Expense.module.scss';

export default function Expense({ total, max, expenses }) {
  const bars = expenses.map((item, index) => (
    <Graph expense={item.amount} max={max} key={index} day={item.day} />
  ));

  return (
    <section className={styles.expense}>
      <h1>Spending - Last 7 days</h1>
      <div className={styles.charts}>{bars}</div>
      <Total total={total} />
    </section>
  );
}

import React from 'react';
import Total from '../Total';
import styles from './Expense.module.scss';

export default function Expense() {
  return (
    <section className={styles.expense}>
      <Total total={478.33} />
    </section>
  );
}

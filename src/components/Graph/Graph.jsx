import React from 'react';
import styles from './Graph.module.scss';

export default function Graph({ max, expense, day }) {
  const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'sat', 'sun'];
  const d = new Date();
  let dayWeek = weekday[d.getDay()];

  const height = (expense / max) * 100;

  const style = {
    height: height + '%',
  };

  return (
    <section className={`${styles.bar} ${day === dayWeek ? styles.dayWeek : styles.currentDay}`}>
      <div className={styles.chart} style={style}>
        <div className={styles.price}>
          <p>${expense}</p>
        </div>
        <p className={styles.day}>{day}</p>
      </div>
    </section>
  );
}

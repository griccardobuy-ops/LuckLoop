import React from 'react';
import styles from './Header.module.css';

/**
 * Header Component - Display app title and user info
 */
export const Header = ({ day, energy, streak }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>🍀 Luck Loop</h1>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.label}>Day</span>
            <span className={styles.value}>{day}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Energy</span>
            <span className={styles.value}>{energy}%</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.label}>Streak</span>
            <span className={styles.value}>{streak}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

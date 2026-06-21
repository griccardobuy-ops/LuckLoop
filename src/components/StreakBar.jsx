import React from 'react';
import styles from './StreakBar.module.css';

/**
 * StreakBar Component - Displays current streak and achievements
 */
export const StreakBar = ({ currentStreak, maxStreak = 100, badges = [] }) => {
  const streakPercentage = (currentStreak / maxStreak) * 100;

  return (
    <div className={styles.streakContainer}>
      <h3>Current Streak</h3>
      <div className={styles.streakInfo}>
        <span className={styles.count}>{currentStreak}</span>
        <span className={styles.label}>Days</span>
      </div>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${Math.min(streakPercentage, 100)}%` }}
        ></div>
      </div>

      <div className={styles.badges}>
        {badges.length > 0 && (
          <>
            <h4>Badges</h4>
            <ul className={styles.badgeList}>
              {badges.map((badge, index) => (
                <li key={index} className={styles.badge}>
                  🏆 {badge}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

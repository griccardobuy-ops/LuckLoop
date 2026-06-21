import React from 'react';
import styles from './RealMissionCard.module.css';

/**
 * RealMissionCard Component - Display a mission/quest card
 */
export const RealMissionCard = ({ mission, onComplete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{mission.title}</h3>
        <span className={styles.reward}>{mission.reward} pts</span>
      </div>
      <p className={styles.description}>{mission.description}</p>
      <div className={styles.difficulty}>
        <span className={styles.label}>Difficulty:</span>
        <span className={`${styles.level} ${styles[mission.difficulty]}`}>
          {mission.difficulty}
        </span>
      </div>
      <button
        className={styles.completeBtn}
        onClick={() => onComplete?.(mission.id)}
      >
        Complete Mission
      </button>
    </div>
  );
};

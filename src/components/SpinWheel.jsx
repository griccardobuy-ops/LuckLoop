import React, { useState } from 'react';
import styles from './SpinWheel.module.css';

/**
 * SpinWheel Component - Main interactive spinning wheel for luck-based rewards
 */
export const SpinWheel = ({ onSpin, energy, isSpinning }) => {
  const rewards = [
    { id: 1, name: 'Lucky Day', multiplier: 2 },
    { id: 2, name: 'Bonus Energy', multiplier: 1.5 },
    { id: 3, name: 'Streak Boost', multiplier: 3 },
    { id: 4, name: 'Lucky Coin', multiplier: 1.2 },
  ];

  const handleSpin = () => {
    if (energy < 25 || isSpinning) return;

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const selectedReward = rewards[randomIndex];

    onSpin?.(selectedReward);
  };

  return (
    <div className={styles.wheelContainer}>
      <div className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}>
        {rewards.map((reward, index) => (
          <div
            key={reward.id}
            className={styles.segment}
            style={{
              transform: `rotate(${(360 / rewards.length) * index}deg)`,
            }}
          >
            <span className={styles.label}>{reward.name}</span>
          </div>
        ))}
      </div>
      <button
        className={styles.spinButton}
        onClick={handleSpin}
        disabled={energy < 25 || isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin Wheel'}
      </button>
    </div>
  );
};

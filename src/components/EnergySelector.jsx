import React from 'react';
import styles from './EnergySelector.module.css';

/**
 * EnergySelector Component - Allows user to select energy level for spins
 */
export const EnergySelector = ({ currentEnergy, onEnergyChange, maxEnergy = 100 }) => {
  const energyLevels = [25, 50, 75, 100];

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor="energy-select">Select Energy:</label>
      <div className={styles.energyOptions}>
        {energyLevels.map((level) => (
          <button
            key={level}
            className={`${styles.option} ${
              currentEnergy === level ? styles.active : ''
            }`}
            onClick={() => onEnergyChange(level)}
            disabled={level > maxEnergy}
          >
            {level}%
          </button>
        ))}
      </div>
      <div className={styles.energyBar}>
        <div
          className={styles.energyFill}
          style={{ width: `${(currentEnergy / maxEnergy) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

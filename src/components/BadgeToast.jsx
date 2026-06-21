import React, { useState, useEffect } from 'react';
import styles from './BadgeToast.module.css';

/**
 * BadgeToast Component - Toast notification for earned badges
 */
export const BadgeToast = ({ badge, onDismiss, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  if (!isVisible) return null;

  return (
    <div className={`${styles.toast} ${styles.slideIn}`}>
      <div className={styles.content}>
        <span className={styles.icon}>🏆</span>
        <div className={styles.message}>
          <strong>Badge Earned!</strong>
          <p>{badge}</p>
        </div>
      </div>
      <button
        className={styles.close}
        onClick={() => {
          setIsVisible(false);
          onDismiss?.();
        }}
      >
        ×
      </button>
    </div>
  );
};

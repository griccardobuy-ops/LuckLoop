import { useState, useEffect } from 'react';

/**
 * Custom hook for managing the daily luck loop state and persistence
 */
export const useDailyLoop = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState([]);
  const [lastSpinDate, setLastSpinDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('luckLoopState');
    if (saved) {
      try {
        const state = JSON.parse(saved);
        setCurrentDay(state.currentDay || 0);
        setEnergy(state.energy || 100);
        setStreak(state.streak || 0);
        setBadges(state.badges || []);
        setLastSpinDate(state.lastSpinDate);
      } catch (error) {
        console.error('Failed to load state from localStorage:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Persist state to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(
        'luckLoopState',
        JSON.stringify({
          currentDay,
          energy,
          streak,
          badges,
          lastSpinDate,
        })
      );
    }
  }, [currentDay, energy, streak, badges, lastSpinDate, isLoading]);

  // Check if it's a new day
  useEffect(() => {
    if (!lastSpinDate) return;

    const last = new Date(lastSpinDate);
    const now = new Date();

    const lastDate = last.toDateString();
    const nowDate = now.toDateString();

    if (lastDate !== nowDate) {
      // It's a new day
      setEnergy(100);
      setCurrentDay((prev) => prev + 1);
    }
  }, [lastSpinDate]);

  const spin = (reward) => {
    setLastSpinDate(new Date().toISOString());
    setEnergy((prev) => Math.max(0, prev - 25));
    setStreak((prev) => prev + 1);

    if (reward && reward.badgeId) {
      setBadges((prev) => [...prev, reward.badgeId]);
    }

    return {
      day: currentDay,
      energy: Math.max(0, energy - 25),
      streak: streak + 1,
    };
  };

  const resetDaily = () => {
    setEnergy(100);
    setCurrentDay((prev) => prev + 1);
    setLastSpinDate(new Date().toISOString());
  };

  return {
    currentDay,
    energy,
    streak,
    badges,
    lastSpinDate,
    isLoading,
    spin,
    resetDaily,
    setEnergy,
    setStreak,
    setBadges,
  };
};

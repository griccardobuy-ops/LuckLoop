/**
 * Seed utility for generating deterministic random values
 */

export const seed = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export const seededRandom = (seedValue) => {
  const x = Math.sin(seedValue) * 10000;
  return x - Math.floor(x);
};

export const getRandomWithSeed = (min, max, seedValue) => {
  const random = seededRandom(seedValue);
  return Math.floor(random * (max - min + 1)) + min;
};

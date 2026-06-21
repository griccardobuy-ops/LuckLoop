import React, { useState } from 'react';
import { useDailyLoop } from './hooks/useDailyLoop';
import { Header } from './components/Header';
import { SpinWheel } from './components/SpinWheel';
import { EnergySelector } from './components/EnergySelector';
import { StreakBar } from './components/StreakBar';
import { RealMissionCard } from './components/RealMissionCard';
import { missions } from './data/missions';
import './App.css';

function App() {
  const { currentDay, energy, streak, badges, isLoading, spin, setEnergy } = useDailyLoop();
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedEnergy, setSelectedEnergy] = useState(25);

  const handleSpin = (reward) => {
    setIsSpinning(true);
    setTimeout(() => {
      spin(reward);
      setIsSpinning(false);
    }, 1500);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      <Header day={currentDay} energy={energy} streak={streak} />
      
      <main className="container">
        <section className="spin-section">
          <h2>Try Your Luck</h2>
          <EnergySelector 
            currentEnergy={energy}
            onEnergyChange={setSelectedEnergy}
          />
          <SpinWheel 
            onSpin={handleSpin}
            energy={energy}
            isSpinning={isSpinning}
          />
        </section>

        <section className="stats-section">
          <StreakBar 
            currentStreak={streak}
            badges={badges}
          />
        </section>

        <section className="missions-section">
          <h3>Daily Missions</h3>
          <div className="missions-grid">
            {missions.map((mission) => (
              <RealMissionCard 
                key={mission.id}
                mission={mission}
                onComplete={(id) => console.log(`Completed mission ${id}`)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

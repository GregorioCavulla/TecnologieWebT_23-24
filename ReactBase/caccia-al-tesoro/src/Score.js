// ScoreSection.js
import React from 'react';

const ScoreSection = ({ attempts, found }) => {
  return (
    <div className="score-section">
      <p>Attempts: {attempts}</p>
      {found && <p>Score: {attempts <= 10 ? 5 : 2}</p>}
    </div>
  );
};

export default ScoreSection;

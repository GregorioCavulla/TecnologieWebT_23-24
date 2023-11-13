// ConfigSection.js
import React from 'react';

const ConfigSection = ({ width, height, onWidthChange, onHeightChange, onResetGame }) => {
  return (
    <div className="config-section">
      <label>
        Width:
        <input type="number" value={width} min="5" onChange={onWidthChange} />
      </label>
      <label>
        Height:
        <input type="number" value={height} min="5" onChange={onHeightChange} />
      </label>
      <button onClick={onResetGame}>Reset Game</button>
    </div>
  );
};

export default ConfigSection;

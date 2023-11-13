// App.js
import React, { useState } from 'react';
import Config from './Config';
import Map from './Map';
import Score from './Score';

const App = () => {
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const [treasureLocation, setTreasureLocation] = useState(generateRandomLocation());
  const [attempts, setAttempts] = useState(0);
  const [found, setFound] = useState(false);

    const generateRandomLocation = () => {
    const row = Math.floor(Math.random() * height);
    const col = Math.floor(Math.random() * width);
    return { row, col };
  };

  const handleWidthChange = (e) => {
    const newWidth = parseInt(e.target.value, 10);
    setWidth(newWidth >= 5 ? newWidth : 5);
  };

  const handleHeightChange = (e) => {
    const newHeight = parseInt(e.target.value, 10);
    setHeight(newHeight >= 5 ? newHeight : 5);
  };

  const handleCellClick = (row, col) => {
    if (found) return;

    setAttempts(attempts + 1);

    if (row === treasureLocation.row && col === treasureLocation.col) {
      setFound(true);
    }
  };

  const resetGame = () => {
    setWidth(5);
    setHeight(5);
    setTreasureLocation(generateRandomLocation());
    setAttempts(0);
    setFound(false);
  };

  const renderGrid = () => {
    const grid = [];

    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(
          <div
            key={`${i}-${j}`}
            className={`cell ${found && i === treasureLocation.row && j === treasureLocation.col ? 'treasure' : ''}`}
            onClick={() => handleCellClick(i, j)}
          >
            {found && i === treasureLocation.row && j === treasureLocation.col ? 'T' : ''}
          </div>
        );
      }
      grid.push(<div key={i} className="row">{row}</div>);
    }

    return grid;
  };

  return (
    <div className="app">
      <Config
        width={5}
        height={5}
        onWidthChange={handleWidthChange}
        onHeightChange={handleHeightChange}
        onResetGame={resetGame}
      />
      <Map grid={renderGrid()} onCellClick={handleCellClick} />
      <Score attempts={attempts} found={found} />
    </div>
  );
};

export default App;

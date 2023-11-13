// Grid.js
import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
  render() {
    const { grid, onCellClick } = this.props;

    return (
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                value={cell}
                onClick={() => onCellClick(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;

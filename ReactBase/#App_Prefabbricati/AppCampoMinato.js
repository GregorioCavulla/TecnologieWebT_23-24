// App.js
import React, { Component } from 'react';
import Grid from './Grid';
import './App.css';
import Cell from './Cell';

class App extends Component {
  // ... (stesso codice fino a handleCellClick)

  handleCellClick = (row, col) => {
    const { gameGrid, steps, completedPaths, failedPaths, totalScore } = this.state;

    if (gameGrid[row][col] === 'mine') {
      this.setState({
        failedPaths: failedPaths + 1,
        totalScore: totalScore - 5,
        gameOver: true,
      });
    } else {
      gameGrid[row][col] = 'empty';

      if (steps === 1) {
        this.setState({
          completedPaths: completedPaths + 1,
          totalScore: totalScore + 5,
          gameOver: true,
        });
      } else {
        this.setState({ gameGrid, steps: steps - 1 });
      }
    }
  };

  render() {
    const { gridSize, steps, gameGrid, gameOver } = this.state;

    return (
      <div className="app">
        {/* ... (stesse sezioni di configurazione e conteggio) */}

        <div className="grid-section">
          {gameOver ? (
            <div className="dialog">
              <p>{this.state.steps === 0 ? 'Partita terminata: percorso completato!' : 'Partita terminata: percorso non completato!'}</p>
              <button onClick={this.handleStartGame}>Nuova Partita</button>
            </div>
          ) : (
            <Grid grid={gameGrid} onCellClick={this.handleCellClick} />
          )}
        </div>
      </div>
    );
  }
}

export default App;

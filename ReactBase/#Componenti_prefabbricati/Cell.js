// Cell.js
import React from 'react';

class Cell extends React.Component {
  render() {
    const { value, onClick } = this.props;
    const cellStyle = value === 'empty' ? 'empty-cell' : value === 'mine' ? 'mine-cell' : 'clicked-cell';

    return (
      <div className={`cell ${cellStyle}`} onClick={onClick}>
        {value === 'mine' ? 'M' : ''}
      </div>
    );
  }
}

export default Cell;

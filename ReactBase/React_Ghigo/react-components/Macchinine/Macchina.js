import React from "react";

function Macchina({ colore }) {
  const stileMacchina = {
    color: colore,
  };

  return (
    <div className="macchina" style={stileMacchina}>
      🚗
    </div>
  );
}

export default Macchina;

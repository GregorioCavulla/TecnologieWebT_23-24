import React, { useState } from "react";
import Compilazione from "./Compilazione.js";
import Visualizzazione from "./Visualizzazione.js";
import Estrazione from "./Estrazione.js";

function App() {
  var [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);

  function handleNumbersSubmit(numbers) {
    setNumbers(numbers);
  }
  return (
    <div>
      <Compilazione numbers={numbers} />
    </div>
  );
}

export default App;

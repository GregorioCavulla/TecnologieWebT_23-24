import React, { useState } from "react";
import CalcApp from "./Calcolatrice/App";
import ListApp from "./List/App";
import LavagnApp from "./Lavagna/App";
import GarApp from "./Macchinine/App";
import Schedina from "./Schedina/App";
import Pesca from "./Pesca/App";
import NavLink from "./NavLink";

function MainApp() {
  const [currentApp, setCurrentApp] = useState("calcapp");

  function renderCurrentApp() {
    switch (currentApp) {
      case "calcapp":
        return <CalcApp />;
      case "listapp":
        return <ListApp />;
      case "lavagnapp":
        return <LavagnApp />;
      case "garapp":
        return <GarApp />;
      case "schedina":
        return <Schedina />;
      case "pesca":
        return <Pesca />;
      // Aggiungi altri casi per le altre sottoapplicazioni
      default:
        return null;
    }
  }

  function handleNavClick(app) {
    setCurrentApp(app);
  }

  return (
    <div>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <NavLink
            label="Calcolatrice"
            onClick={() => handleNavClick("calcapp")}
          />
          <NavLink label="Lista" onClick={() => handleNavClick("listapp")} />
          <NavLink
            label="Lavagna"
            onClick={() => handleNavClick("lavagnapp")}
          />
          <NavLink label="Gara" onClick={() => handleNavClick("garapp")} />
          {/* Aggiungi altri NavLink per le altre sottoapplicazioni */}
          <NavLink
            label="Schedina"
            onClick={() => handleNavClick("schedina")}
          />
          <NavLink label="Pesca" onClick={() => handleNavClick("pesca")} />
        </ul>
      </nav>

      {renderCurrentApp()}
    </div>
  );
}

export default MainApp;

import { useState } from "react";
import "./Diceware.css";
import GenerateContainer from "./generate/GenerateContainer";
import SettingsContainer from "./settings/SettingsContainer";

function Diceware() {
  const [rollNum, setRollNum] = useState(5);
  const [generate, setGenerate] = useState(false);

  function handleNumberClick(number) {
    setRollNum(number);
  }

  function handleRoll() {
    setGenerate(true);
  }

  return (
    <div className="Diceware">
      <SettingsContainer
        handleRoll={handleRoll}
        rollNum={rollNum}
        handleNumberClick={handleNumberClick}
      />
      {generate && <GenerateContainer rollNum={rollNum} />}
    </div>
  );
}

export default Diceware;

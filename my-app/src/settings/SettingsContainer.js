import "./SettingsContainer.css";
import DiceRollsNum from "./DiceRollsNum";
import RollButton from "./RollButton";
import { useState } from "react";

function SettingsContainer(props) {
  const [rollNum, setRollNum] = useState(props.rollNum);

  function handleNumberClick(number) {
    setRollNum(number);
  }

  function handleRoll() {
    props.setRollNum(rollNum);
    props.setGenerate(props.generate + 1);
  }

  return (
    <div className="SettingsContainer">
      <h1>Number of dice rolls:</h1>
      <DiceRollsNum selected={rollNum} onClick={handleNumberClick} />
      <RollButton onClick={handleRoll} />
    </div>
  );
}

export default SettingsContainer;

import "./DiceRollContainer.css";
import DiceRollsNum from "./DiceRollsNum";
import RollButton from "./RollButton";
// import wordList from './data/wordList.json'
import { useState } from "react";

function DiceRollContainer() {
  const [rollNum, setRollNum] = useState(5);

  function handleNumberClick(number) {
    setRollNum(number);
  }

  function handleRoll() {
    
  }

  return (
    <div className="DiceRollContainer">
      <h1>Number of dice rolls:</h1>
      <DiceRollsNum selected={rollNum} onClick={handleNumberClick} />
      <RollButton onClick={handleRoll} />
    </div>
  );
}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max) + 1;
// }

export default DiceRollContainer;

import "./DiceRollContainer.css";
import DiceRollsNum from "./DiceRollsNum";
import RollButton from "./RollButton";

function DiceRollContainer() {
  return (
    <div className="DiceRollContainer">
      <h1>Number of dice rolls:</h1>
      <DiceRollsNum />
      <RollButton />
    </div>
  );
}

export default DiceRollContainer;

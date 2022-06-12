import "./SettingsContainer.css";
import DiceRollsNum from "./DiceRollsNum";
import RollButton from "./RollButton";

function SettingsContainer(props) {
  return (
    <div className="SettingsContainer">
      <h1>Number of dice rolls:</h1>
      <DiceRollsNum
        selected={props.rollNum}
        onClick={props.handleNumberClick}
      />
      <RollButton onClick={props.handleRoll} />
    </div>
  );
}

export default SettingsContainer;

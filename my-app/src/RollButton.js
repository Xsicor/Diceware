import "./RollButton.css";

function RollButton(props) {
  return (
    <div className="RollButton">
      <button onClick={props.onClick()}>🎲 Roll Dice</button>
    </div>
  );
}

export default RollButton;

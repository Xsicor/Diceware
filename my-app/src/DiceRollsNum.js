import "./DiceRollsNum.css";

function DiceRollsNum(props) {
  const numbers = [2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="DiceRollsNum">
      {numbers.map((num) => {
        if (props.selected === num) {
          return (
            <button key={num} className="activeNum">
              {num}
            </button>
          );
        } else {
          return (
            <button
              onClick={() => props.onClick(num)}
              key={num}
              className="normalNum"
            >
              {num}
            </button>
          );
        }
      })}
    </div>
  );
}

export default DiceRollsNum;

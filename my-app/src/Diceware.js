import { useState } from "react";
import "./Diceware.css";
import GenerateContainer from "./generate/GenerateContainer";
import SettingsContainer from "./settings/SettingsContainer";

function Diceware() {
  const [rollNum, setRollNum] = useState(5);
  const [generate, setGenerate] = useState(false);

  return (
    <div className="Diceware">
      <SettingsContainer
        rollNum={rollNum}
        setRollNum={setRollNum}
        setGenerate={setGenerate}
      />
      {generate && <GenerateContainer rollNum={rollNum} />}
    </div>
  );
}

export default Diceware;

import './App.css';
import DiceRollContainer from './DiceRollContainer';
import Introduction from './Introduction.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Introduction />
      </header>
      <DiceRollContainer/>
    </div>
  );
}

export default App;

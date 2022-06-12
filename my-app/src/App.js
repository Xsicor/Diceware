import './App.css';
import Introduction from './Introduction.js';
import Diceware from './Diceware';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Introduction />
      </header>
      <Diceware/>
    </div>
  );
}

export default App;

import './App.css';
import Countdown from './components/countdown/CountDown';
import DigitalClock from './components/digitalclock/DigitalClock';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DigitalClock></DigitalClock>
        <Timer></Timer>
        <Countdown></Countdown>
      </header>
    </div>
  );
}

export default App;
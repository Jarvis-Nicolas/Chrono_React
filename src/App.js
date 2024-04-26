import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
    <h1>Chronomètre React JS</h1>
      <div class="container">
        <div class="timer-display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div class="buttons">
          {running ? (
            <button onClick={() => { setRunning(false) }}>Stop</button>
          ) : (
            <button onClick={() => { setRunning(true) }}>Start</button>
          )}
          <button onClick={() => { setTime(0) }}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;

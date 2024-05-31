import { useState } from "react";
import "./App.css";

function App() {
  const { time, setTime } = useState(0);
  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        <span>{"0" + Math.floor((time / 60000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 1000) % 60)}:</span>
        <span>{"0" + Math.floor((time / 10) % 100)}:</span>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [Time, cgTime] = useState("Time");

  function change() {
    cgTime(time);
  }
  setInterval(change, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={change}>Get Time</button>
    </div>
  );
}

export default App;

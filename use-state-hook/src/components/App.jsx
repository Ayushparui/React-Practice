import React, { useState } from "react";

function App() {
  const [number, setCount] = useState(0);
  console.log(number);

  function increase() {
    setCount(number + 1);
  }

  function decrease() {
    setCount(number - 1);
  }
  return (
    <div className="container">
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

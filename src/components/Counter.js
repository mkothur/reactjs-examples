import React, { useState } from "react";
import "../styles.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [one, setNewColor] = useState("black");
  const changeColor = () => {
    setNewColor("red");
  };
  return (
    <div className="counter">
      <h2 style={{ color: one }} onClick={changeColor}>
        change me
      </h2>
      <h1>1. Counter example using hooks</h1>
      <h2>counter value is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

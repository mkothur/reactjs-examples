import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CounterTwo() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="counter">
      <h1>2. Counter example using useEffect</h1>
      <h2>counter value is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

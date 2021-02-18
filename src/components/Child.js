import React, { useState } from "react";

const Child = ({ parentCallback }) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        const newValue = count + 1;
        setCount(newValue);
        parentCallback(newValue);
      }}
    >
      Click me {count}
    </button>
  );
};

export default Child;

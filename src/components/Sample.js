import React, { useState, useEffect } from "react";

export default function Sample() {
  const [one, setOne] = useState("#000");

  const changeToRed = () => {
    setOne("red");
  };
  return (
    <div style={{ color: one }} onClick={changeToRed}>
      Red
    </div>
  );
}

import React from "react";

const Hello = () => {
  // return (
  //   <div>
  //     <h1>Welcome Hooks</h1>
  //   </div>
  // );
  return React.createElement(
    "div",
    { id: "helo", className: "dummyClass" },
    React.createElement("h1", null, "Welcome")
  );
};

export default Hello;

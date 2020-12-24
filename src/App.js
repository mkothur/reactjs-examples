import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import CounterTwo from "./components/CounterTwo";
import PopulateName from "./components/PopulateName";
import Hello from "./components/Hello";
import DataFetching from "./components/DataFetching";
import Greetings from "./components/Greetings";

export default function App() {
  const greeting = "Wishes";
  return (
    <div className="App">
      <h1>ReactJS examples</h1>
      <Counter />
      <CounterTwo />
      <PopulateName />
      <Hello />
      {/* <h2>{greeting}</h2> */}
      <Greetings greeting={greeting} />
      <DataFetching />
    </div>
  );
}

// const Greetings = () => {
//   const test = "Wishes";
//   return (
//     <div>
//       <h2>{test}</h2>
//     </div>
//   );
// };

// const Greetings = (props) => <h1>{props.greeting}</h1>;

// const Greetings = ({ greeting }) => <h1>{greeting}</h1>;

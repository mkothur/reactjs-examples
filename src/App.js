import React from "react";
import "./styles.css";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import PopulateName from "./components/PopulateName";
import PageComponent from "./components/PageComponent";
// import Sample from "./components/Sample";
// import Test from "./components/Test";
// import Hello from "./components/Hello";
// import DataFetching from "./components/DataFetching";
// import Greetings from "./components/Greetings";

export default function App() {
  const greeting = "Wishes";
  return (
    <div className="App">
      <h1>ReactJS examples</h1>
      <Counter />
      <CounterTwo />
      <PopulateName />
      {/* <Sample /> */}
      {/* <Test /> */}
      {/* <Hello /> */}
      {/* <h2>{greeting}</h2> */}
      {/* <Greetings greeting={greeting} /> */}
      {/* <DataFetching /> */}
      <PageComponent />
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

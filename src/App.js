import React from "react";
import "./styles.css";
import Counter from "./components/Counter";
import CounterTwo from "./components/CounterTwo";
import PopulateName from "./components/PopulateName";
import DataFetching from "./components/DataFetching";

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS examples</h1>
      <Counter />
      <CounterTwo />
      <PopulateName />
      <DataFetching />
    </div>
  );
}

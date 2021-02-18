import React from "react";
import "../styles.css";

export default function Example() {
  const heroes = [
    { name: "Batman", franchise: "DC" },
    { name: "Ironman", franchise: "Marvel" },
    { name: "Thor", franchise: "Marvel" },
    { name: "Superman", franchise: "DC" }
  ];
  var marvelHeroes = heroes.filter(function (hero) {
    return hero.franchise === "DC";
  });
  return (
    <div className="counter">
      <h2>Filter example</h2>
      <h1>{marvelHeroes.map((marvelHeroe) => marvelHeroe.name)}</h1> <br />
    </div>
  );
}

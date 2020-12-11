import React, { useState, useEffect } from "react";
import "../styles.css";

export default function PopulateName() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);
  return (
    <div className="counter">
      <h1>3. API call using hooks</h1>
      {loading ? <div>Loading...</div> : <div>{data.name.last}</div>}
    </div>
  );
}

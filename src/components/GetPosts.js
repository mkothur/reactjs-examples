import React, { useEffect, useState } from "react";
import axios from "axios";
export default function GetPosts(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
    // axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    //   const persons = res.data;
    //   setUsers(persons);
    // });
  }, [0]);

  return (
    <div>
      <h1>{props.name}</h1>
      {users.map((item) => (
        <li>
          <p>id: {item.id}</p>
          <h2>Name: {item.name}</h2>
        </li>
      ))}
    </div>
  );
}

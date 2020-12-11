import React, { useState, useEffect } from "react";
import "../styles.css";
import axios from "axios";

export default function DataFetching() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="counter">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <br />
            <br /> title: {post.title} <br />
            <br /> body: {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

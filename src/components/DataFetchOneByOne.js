import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetchOneByOne() {
  const [post, setPost] = useState({});
  const [id, setID] = useState(1);
  const [idFromButtonClick, setidFromButtonClick] = useState(1);

  const handleClick = () => {
    setidFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        setPost(res.data);
      });
  }, [[idFromButtonClick]]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <div>{post.title}</div>
      <button onClick={handleClick}>SetID</button>
      {/* <ul>0
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

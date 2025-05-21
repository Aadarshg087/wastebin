import React, { useEffect, useState } from "react";
import New from "./New";
import { useNavigate } from "react-router-dom";

// Get the list of blogs and button of new or create
const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const navigate = useNavigate();

  // use useEffect to fectch all the blogs
  return (
    <div className="bg-blue-900">
      <div>
        <h1>What's on you mind</h1>
        <button onClick={() => navigate("/new")}>Write something?</button>
      </div>
      <div>
        {allBlogs.map((item, ind) => {
          <div key={ind}>
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Home;

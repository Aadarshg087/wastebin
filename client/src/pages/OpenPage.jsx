import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OpenPage = () => {
  const location = useLocation();
  const [content, setContent] = useState({});
  useEffect(() => {
    async function getData() {
      const path = location.pathname;
      const entry = await axios.get(`http://localhost:8000${path}`);
      console.log(entry);
      setContent(entry.data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>{content.title}</h1>
      <p name="content" id="">
        {content.content}
      </p>
      <button>Duplicate</button>
    </div>
  );
};

export default OpenPage;

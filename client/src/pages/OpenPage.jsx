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
    <div className="bg-blue-950 py-10 px-10 h-screen flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="bg-gray-100 w-[70%] rounded-xl text-2xl outline-none py-2 pl-3  font-bold">
          {content.title}
        </h1>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-600 duration-150 rounded-xl text-xl outline-none py-1 px-20 text-white"
        >
          Duplicate
        </button>
      </div>
      <p
        name=""
        id=""
        className="bg-gray-100 rounded-xl text-xl outline-none py-2 pl-3  font-bold flex-grow"
      >
        {content.content}
      </p>
    </div>
  );
};

export default OpenPage;

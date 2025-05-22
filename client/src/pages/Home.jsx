import React, { useEffect, useState } from "react";
import New from "./New";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

// Get the list of blogs and button of new or create
const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const navigate = useNavigate();

  // use useEffect to fetch all the blogs
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8000/allBlogs");
        console.log("response", response.data);
        setAllBlogs(response.data);
      } catch (error) {
        console.log("Error in getting all blogs", error);
      }
    }

    getData();
  }, []);
  return (
    <div className="bg-blue-900">
      <div className=" text-white font-bold pt-60 pb-50 text-center">
        <h1 className="text-7xl mb-4">What's on your mind!</h1>
        <button
          onClick={() => navigate("/new")}
          className=" rounded-2xl bg-blue-100 text-blue-900 hover:bg-blue-900 hover:text-blue-100 hover:border-1 hover:px-15 duration-150 px-10 py-2 text-xl"
        >
          Write Notes
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {allBlogs.map((item, ind) => {
          return (
            <Link
              to={`/${item._id}`}
              key={ind}
              className="bg-white p-6 rounded-md shadow-md transition duration-150 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
            >
              <h1 className="text-xl font-bold mb-2 text-gray-900">
                {item.title}
              </h1>
              <p className="text-gray-700">{item.content}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

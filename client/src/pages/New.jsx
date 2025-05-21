import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// add side numbering something
const New = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function onSubmission(data) {
    console.log("data", data);
    const entry = await axios.post("http://localhost:8000/save", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(entry);
    navigate(`/${entry.data.id}`);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmission)}>
        <input
          type="text"
          {...register("title", { required: true })}
          className="bg-red-500"
        />
        <textarea
          name="content"
          id=""
          {...register("content")}
          className="bg-blue-800"
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default New;

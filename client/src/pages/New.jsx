import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
// add side numbering something
const New = () => {
  const { control, register, handleSubmit } = useForm();
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
    <div className="bg-blue-950 py-10 px-10">
      <form
        className="flex flex-col gap-8 h-screen"
        onSubmit={handleSubmit(onSubmission)}
      >
        <div className="flex justify-between">
          <input
            placeholder="Title"
            type="text"
            {...register("title", { required: true })}
            className="bg-gray-100 w-[70%] rounded-xl text-2xl outline-none py-2 pl-3  font-bold"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 duration-150 rounded-xl text-xl outline-none py-1 px-20 text-white"
          >
            Save
          </button>
        </div>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <CodeMirror
              {...field}
              value={field.value}
              height="500px"
              extensions={[javascript()]}
              theme="light"
              onChange={(value) => field.onChange(value)}
              className="text-xl"
            />
          )}
        />
      </form>
    </div>
  );
};

export default New;

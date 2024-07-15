"use client";
import Todo from "../Components/Todo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "../Components/Jumbotron";

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    const response = await axios("/api");
    setTodoData(response.data.todos);
  };
  const deleteTodo = async (id) => {
    const response = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });
    toast.success(response.data.msg);
    fetchTodos();
  };
  const completeTodo = async (id) => {
    const response = await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      }
    );
    toast.success(response.data.msg);
    fetchTodos();
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      //api code
      const response = await axios.post("/api", formData);

      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      await fetchTodos();
    } catch (error) {
      toast.error("Skill Issue!! 💀");
    }
  };
  return (
    <>
      <ToastContainer theme="dark" />
      <Jumbotron />

      

      <form
        className="width-[80%] md:max-w-[600px] mx-auto max-w-sm mt-24 gap-2 px-2 "
        onSubmit={onSubmitHandler}
      >
        <div className="mb-5">
          <label
            
            className="block mb-2 text-xl font-medium text-gray-900 light:text-white"
          >
            Your Task
          </label>
          <input
            value={formData.title}
            onChange={onChangeHandler}
            type="text"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Study , Swimming, Gaming,.. etc."
            required
          />
        </div>
        <label
         
          className="block mb-2 text-lg font-medium text-gray-900 light:text-white"
        >
          Your Task Description
        </label>
        <textarea
          onChange={onChangeHandler}
          name="description"
          value={formData.description}
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 light:border-gray-600 dark:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
          placeholder="I will start Trigonometry from 6.15 pm.. etc."
        ></textarea>
        <button
          type="submit"
          className="mt-5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add your Todo
        </button>
      </form>

      <h1 className="px-10 py-5 mt-20 text-3xl font-extrabold text-gray-700 md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Your
        </span>{" "}
        To-Dos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-10">
        {todoData.map((item, index) => {
          return (
            <Todo
              key={index}
              id={index}
              title={item.title}
              description={item.description}
              complete={item.isCompleted}
              mongoId={item._id}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
            />
          );
        })}
      </div>

      {/* <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  complete={item.isCompleted}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })}
          </tbody>
        </table>
      </div> */}
    </>
  );
}






{/* <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 width-[80%] max-w-[600px] mt-24 px-2 mx-auto"
      >
        <input
          type="text"
          value={formData.title}
          name="title"
          onChange={onChangeHandler}
          id=""
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          name="description"
          onChange={onChangeHandler}
          className="px-3 py-2 border-2 w-full"
          value={formData.description}
          placeholder="Enter Description"
        ></textarea>
        
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Add your Todo
        </button>
      </form> */}
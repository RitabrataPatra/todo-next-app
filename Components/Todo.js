import React from "react";

const Todo = ({
  id,
  title,
  description,
  mongoId,
  complete,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <>
      {/* //--------------------------------------------------------------// */}

      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 light:border-gray-700">
        <a href="#">
          <h5
            className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white ${
              complete ? "line-through" : ""
            }`}
          >
            {title}
          </h5>
        </a>
        <p
          className={`mb-3 font-normal text-gray-700 dark:text-gray-400  ${
            complete ? "line-through" : ""
          }`}
        >
          {description}
        </p>
        <p>
          {complete ? (
            <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
              Completed
            </span>
          ) : (
            <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-yellow-300">
              <span class="w-2 h-2 me-1 bg-yellow-500 rounded-full"></span>
              Pending
            </span>
          )}
        </p>
        <button className="relative inline-flex items-center justify-center p-0.5 mt-5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white light:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span
            className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            onClick={() => deleteTodo(mongoId)}
          >
            Delete
          </span>
        </button>

        {complete ? (
          ""
        ) : (
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 light:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white light:bg-gray-900 rounded-md group-hover:bg-opacity-0 "
              onClick={() => completeTodo(mongoId)}
            >
              Done
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Todo;

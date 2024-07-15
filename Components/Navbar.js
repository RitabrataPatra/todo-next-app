"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import jinwoo1 from "../public/jinwoo1.jpg";


const Navbar = () => {
  
  const [menuOpen , setMenuOpen] = useState(false)
  const handleMenu=()=>{
    setMenuOpen(!menuOpen)
   
  }
  return (
    // <div className='flex py-3 flex-wrap justify-around'>
    //     <h1 className='text-lg font-semibold'>ToDo App</h1>
    //     <ul className='flex gap-[40px] text-m'>
    //         <li>Leetcode</li>
    //         <li>linkedIn</li>
    //         <li>Google</li>
    //         <li>ChatGPT</li>
    //     </ul>
    // </div>

    <nav className="bg-white dark:bg-gray-100 fixed w-full z-20 top-0 start-0 border-b border-gray-200 light:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image 
            src={jinwoo1}
            className="w-10 h-10 rounded-full"
            alt="Page Logo"
            width={20}
            height={20}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
            Your To-Dos
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={handleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 light:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only"></span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
       {menuOpen ?<div
          className="items-center justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-100 md:light:bg-gray-900 light:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:light:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="https://leetcode.com/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:light:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent light:border-gray-700"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://chatgpt.com/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:light:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent light:border-gray-700"
              >
                ChatGPT
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Google
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ritabratapatra"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div> : <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-100 md:light:bg-gray-900 light:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:light:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            
            <li>
              <a
                href="https://leetcode.com/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:light:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent light:border-gray-700"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="https://chatgpt.com/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:light:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 light:hover:text-white md:dark:hover:bg-transparent light:border-gray-700"
              >
                ChatGPT
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Google
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ritabratapatra"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 light:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>}
      </div>
   
    </nav>
    
  );
};

export default Navbar;

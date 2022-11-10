import React, { useState, useEffect } from "react";
import PasswordGenerator from "./PasswordGenerator";
import logo from "./Logo1.png";
import deleteicon from "./delete.png";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { motion } from "framer-motion";
// import LoginForm from "./LoginForm";
// import LoginForm2 from "./LoginForm2";
// import SignUp from "./SignUp";

export default function Login({ username }) {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // Popover
  const [popover_visibility, setpopover_visibility] = useState("hidden");

  // if Teacher
  // const [teacher, setTeacher] = useState("hidden");

  // New Data
  const [eventData, seteventData] = useState([
    // { notice: "Trip-1", date: "15th Oct" },
  ]);

  const [notice2, setnotice2] = useState("");
  const [date2, setdate2] = useState("");

  function setData() {
    if (notice2 === "" || date2 === "") {
      return;
    }
    seteventData([...eventData, { notice: notice2, date: date2 }]);
    // localStorage.setItem("LOCAL", JSON.stringify(eventData));
  }

  let a = JSON.parse(localStorage.getItem("LOCAL")) || [];
  useEffect(() => {
    seteventData(a);
    // console.log(JSON.parse(localStorage.getItem("LOCAL")));
  }, []);

  useEffect(() => {
    localStorage.setItem("LOCAL", JSON.stringify(eventData));
  }, [eventData]);

  // Password generator visibility
  const [generator_visibility, setgenerator_visibility] = useState("hidden");

  // Premium
  const [premium, setpremium] = useState("GET PREMIUM");
  useEffect(() => {
    if (
      username === "Rishab" ||
      username === "Krish" ||
      username === "Vivaan" ||
      username === "Arnav"
    ) {
      setpremium("PREMIUM");
    }
  }, []);

  // Delete passwords
  const removeTodo = (index) => {
    const newTodos = [...eventData];
    newTodos.splice(index, 1);
    seteventData(newTodos);
  };

  // Sidebar
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        {/* // NEW SECTION START */}

        {/* // NEW SECTION END */}

        <div>
          <main class="bg-gray-800 h-screen overflow-hidden relative">
            <div class="flex items-start justify-between">
              <div class="h-screen hidden lg:block shadow-lg relative w-80">
                <div class="h-full bg-gray-700">
                  <div class="flex items-center justify-start pt-6">
                    <img
                      src={logo}
                      className="rounded-lg w-48 mx-auto"
                      alt=""
                    />
                  </div>
                  <nav class="mt-6">
                    <div>
                      <a
                        class="w-full text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                          </svg>
                        </span>
                        <span
                          onClick={() => {
                            navigator.vibrate(50);
                            setgenerator_visibility("hidden");
                          }}
                          class="mx-2 text-sm font-normal"
                        >
                          Dashboard
                        </span>
                      </a>
                      <a
                        class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                          </svg>
                        </span>
                        <span
                          class="mx-2 text-sm font-normal"
                          onClick={() => {
                            navigator.vibrate(50);
                            setgenerator_visibility("");
                          }}
                        >
                          Password Generator (BETA)
                        </span>
                      </a>
                      <a
                        class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                          </svg>
                        </span>
                        <span class="mx-2 text-sm font-normal">
                          Labs (Coming soon)
                        </span>
                      </a>
                      <a
                        class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                        href="#"
                      >
                        <span class="text-left">
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 2048 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z"></path>
                          </svg>
                        </span>
                        <span class="mx-2 text-sm font-normal">
                          Feedback (Coming Soon)
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="flex flex-col w-full md:space-y-4">
                <header class="w-full h-16 z-40 flex items-center justify-between">
                  <div class="block lg:hidden ml-6">
                    <button
                      onClick={() => setOpen(!open)}
                      class="flex p-2 mt-4 items-center rounded-full bg-white shadow text-gray-500 text-md"
                    >
                      <svg
                        width="20"
                        height="20"
                        class="text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
                    <div class="relative p-1 flex items-center w-full space-x-3 justify-end">
                      <motion.button
                        whileHover={{ rotate: 40 }}
                        class="p-2 hidden sm:flex items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700 text-md"
                      >
                        <svg
                          width="20"
                          height="20"
                          class="text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
                        </svg>
                      </motion.button>
                      <button class="flex py-2 px-3 items-center font-bold rounded-lg bg-green-600 shadow text-white hover:text-green-800 text-md">
                        {premium}
                      </button>
                      <span class="w-1 h-8 rounded-lg bg-gray-200"></span>
                      {/* <a href="#" class="block relative">
                      <img
                        alt="profil"
                        src="/images/person/1.jpg"
                        class="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </a> */}

                      <div class="relative inline-block text-left">
                        <div>
                          <button
                            type="button"
                            class=" border border-gray-300 bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                            id="options-menu"
                            onClick={() => {
                              navigator.vibrate(50);
                              if (popover_visibility === "") {
                                setpopover_visibility("hidden");
                              } else {
                                setpopover_visibility("");
                              }
                            }}
                          >
                            {username}
                            <motion.svg
                              // whileHover={{ scale: 1.1 }}
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                            </motion.svg>
                          </button>
                        </div>
                        <div
                          class={`${popover_visibility} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5`}
                        >
                          <div
                            class="py-1 rounded-xl"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <a
                              href="#"
                              class="block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900 text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span class="flex flex-col">
                                <span>{username}</span>
                              </span>
                            </a>
                            <a
                              href="#"
                              class="block px-4 py-2 text-md hover:bg-gray-100 hover:text-gray-900 text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                              role="menuitem"
                            >
                              <span class="flex flex-col">
                                <span
                                  onClick={() => {
                                    window.location.reload(true);
                                  }}
                                >
                                  Logout
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                {/* Sidebar */}

                <div className={`lg:hidden xl:hidden 2xl:hidden`}>
                  {/* // */}
                  <div className="flex ml-[-290px]">
                    <div
                      className={` ${
                        open ? "translate-x-full" : "translate-x-0"
                      } flex flex-col fixed z-10 h-screen p-3 bg-gray-800 shadow duration-300`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-bold text-white">
                            Dashboard
                          </h2>
                          <button onClick={() => setOpen(!open)}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h8m-8 6h16"
                              />
                            </svg>
                          </button>
                        </div>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button
                              type="submit"
                              className="p-2 focus:outline-none focus:ring"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                            </button>
                          </span>
                          <input
                            type="search"
                            name="Search"
                            placeholder="Search..."
                            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
                          />
                        </div>
                        <div className="flex-1">
                          <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                              <a
                                href="#"
                                onClick={() => {
                                  navigator.vibrate(50);
                                  setgenerator_visibility("hidden");
                                }}
                                className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-gray-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                  />
                                </svg>
                                <span className="text-gray-100">Home</span>
                              </a>
                            </li>
                            <li className="rounded-sm">
                              <a
                                href="#"
                                onClick={() => {
                                  navigator.vibrate(50);
                                  setgenerator_visibility("");
                                }}
                                className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-gray-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                  />
                                </svg>
                                <span className="text-gray-100">
                                  Password Generator (BETA)
                                </span>
                              </a>
                            </li>
                            <li className="rounded-sm">
                              <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-gray-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                  />
                                </svg>
                                <span className="text-gray-100">Labs</span>
                              </a>
                            </li>
                            <li className="rounded-sm">
                              <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-gray-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                </svg>
                                <span className="text-gray-100">Settings</span>
                              </a>
                            </li>
                            <li className="rounded-sm">
                              <a
                                href="#"
                                className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-gray-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                  />
                                </svg>
                                <span className="text-gray-100">Feedback</span>
                              </a>
                            </li>
                            <li className="rounded-sm">
                              <a
                                href="#"
                                onClick={() => {
                                  navigator.vibrate(50);
                                  window.location.reload(true);
                                }}
                                className="flex items-center p-2 space-x-3 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-6 h-6 text-gray-100"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                  />
                                </svg>
                                <span className="text-gray-100">Logout</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* // */}
                </div>

                {/*  */}

                <div
                  class={`${
                    generator_visibility === "hidden" ? "" : "hidden"
                  } overflow-auto h-screen pb-24 px-4 md:px-6`}
                >
                  <h1 class="text-4xl mt-8 font-semibold text-white">
                    Welcome back, {username}
                  </h1>
                  <h2 class="text-md mt-2 text-gray-400">
                    View and Manage your passwords
                  </h2>
                  <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
                    <div class="w-full md:w-6/12">
                      <div class="shadow-lg w-full rounded-xl bg-gray-700 relative overflow-hidden">
                        <a href="#" class="w-full h-full block">
                          <div class="flex items-center bg-purple-600 hover:bg-purple-700 rounded-xl justify-between px-4 py-6 space-x-4">
                            <div class="flex items-center rounded-xl">
                              <p
                                onClick={() => {
                                  navigator.vibrate(50);
                                  setgenerator_visibility("");
                                }}
                                class="text-xl text-white ml-2 font-semibold"
                              >
                                Generate new password
                              </p>
                            </div>
                          </div>
                          {/* <div class="w-full h-3 bg-gray-100">
                                    <div class="w-2/5 h-full text-center text-xs text-white bg-green-400">
                                    </div>
                                </div> */}
                        </a>
                      </div>
                    </div>
                    <div class="flex items-center w-full md:w-1/2 space-x-4">
                      <div class="w-1/2 ">
                        <div class="shadow-lg cursor-pointer bg-orange-600 rounded-xl px-4 py-6 w-full relative">
                          <button class="peer px-5 py-2 text-white">
                            <p class="text-2xl text-white font-bold">All</p>
                            <p class="text-white text-sm">Safe</p>
                          </button>

                          {/* <div class="hidden rounded-xl peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              DS Assgn.
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Java Assgn.
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Maths Assgn.
                            </a>
                          </div> */}
                        </div>
                      </div>

                      <div class="w-1/2 ">
                        <div class="shadow-lg cursor-pointer bg-orange-600 rounded-xl px-4 py-6 w-full relative">
                          <button class="peer px-5 py-2 text-white">
                            <p class="text-2xl text-white font-bold">0</p>
                            <p class="text-white text-sm">Compromised</p>
                          </button>

                          {/* <div class="hidden rounded-xl peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Instagram
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              VCET
                            </a>
                            <a
                              class="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Event 3
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4">
                    <button class="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
                      <motion.svg
                        // whileHover={{ scale:1.1 }}
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2 text-gray-400"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path>
                      </motion.svg>
                      Last month
                      <motion.svg
                        width="20"
                        height="20"
                        class="ml-2 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                      </motion.svg>
                    </button>
                    <span class="text-gray-400">Today's date : {date}</span>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                    {/* <div class="w-full">
                      <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                          facebook
                        </p>
                        <div class="flex items-end space-x-2 my-6">
                          <p class="text-5xl text-black dark:text-white font-bold">
                            xyz@123
                          </p>
                        </div>
                      </div>
                    </div> */}
                    {eventData.map((eventData1, index) => {
                      return (
                        <>
                          <div class="w-full">
                            <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-gray-700 relative">
                              <div className="flex">
                                <p class="text-xl w-max text-white font-semibold border-b border-gray-200">
                                  {eventData1.notice}
                                </p>
                                <motion.img
                                  whileHover={{ rotate: 180 }}
                                  onClick={() => {
                                    removeTodo(index);
                                    navigator.vibrate([
                                      75, 10, 10, 75, 10, 10, 75,
                                    ]);
                                  }}
                                  src={deleteicon}
                                  className="w-[35px] mx-2 cursor-pointer"
                                  alt=""
                                />
                              </div>
                              <div class="flex items-end px-1 space-x-2 my-6">
                                <p class="text-4xl text-white font-bold">
                                  {eventData1.date}
                                </p>
                              </div>

                              <PasswordStrengthMeter
                                password1={eventData1.date}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div class="w-full">
                      <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-gray-700 relative">
                        <p class="text-xl text-black">
                          <input
                            onClick={() => {
                              navigator.vibrate(50);
                            }}
                            className="w-11/12 bg-gray-200 rounded-lg p-2"
                            placeholder="Account identifier"
                            type="text"
                            onChange={(event) => {
                              setnotice2(event.target.value);
                            }}
                          />
                        </p>
                        {/* <div class="flex items-end space-x-2 mt-3 mb-6"> */}
                        <p class="text-xl mt-3 mb-6 text-black">
                          <input
                            onClick={() => {
                              navigator.vibrate(50);
                            }}
                            className="w-11/12 bg-gray-200 rounded-lg p-2"
                            placeholder="Password"
                            type="text"
                            onChange={(event) => {
                              setdate2(event.target.value);
                            }}
                          />
                        </p>
                        {/* </div> */}
                        <button
                          onClick={() => {
                            setData();
                            navigator.vibrate([75, 10, 10, 75, 10, 10, 75]);
                          }}
                          className="bg-orange-600 font-semibold border-2 border-orange-600 hover:bg-gray-700 hover:text-orange-600 rounded-lg px-3 py-2 text-white"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // */}
                {/* // Password Generator */}

                <div className={`${generator_visibility}`}>
                  <PasswordGenerator username={username} />
                </div>
                {/* // End  */}
              </div>
            </div>
          </main>
        </div>

        {/* // Password Generator */}
        {/* <div>
          <div>Generate strong and random passwords</div>
        </div> */}
      </div>
    </>
  );
}

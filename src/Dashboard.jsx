import React from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import deleteicon from "./delete.png";
import { motion } from "framer-motion";

export default function Dashboard({
  username,
  eventData,
  removeTodo,
  setnotice2,
  setdate2,
  setData,
}) {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <div
        className={`overflow-auto h-screen pb-24 px-4 md:px-6`}
      >
        <h1 className="text-4xl mt-8 font-semibold text-white">
          Welcome back, {username}
        </h1>
        <h2 className="text-md mt-2 text-gray-400">
          View and Manage your passwords
        </h2>
        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="w-full md:w-6/12">
            <div className="shadow-lg w-full rounded-xl bg-gray-700 relative overflow-hidden">
              <a href="#" className="w-full h-full block">
                <div className="flex items-center transition ease-in bg-purple-600 hover:bg-purple-700 rounded-xl justify-between px-4 py-6 space-x-4">
                  <div className="flex items-center rounded-xl">
                    <p
                      onClick={() => {
                        navigator.vibrate(50);
                      }}
                      className="text-xl text-white ml-2 font-semibold"
                    >
                      Generate new password
                    </p>
                  </div>
                </div>
                {/* <div className="w-full h-3 bg-gray-100">
                                    <div className="w-2/5 h-full text-center text-xs text-white bg-green-400">
                                    </div>
                                </div> */}
              </a>
            </div>
          </div>
          <div className="flex items-center w-full md:w-1/2 space-x-4">
            <div className="w-1/2 ">
              <div className="shadow-lg cursor-pointer bg-orange-600 rounded-xl px-4 py-6 w-full relative">
                <button className="peer px-5 py-2 text-white">
                  <p className="text-2xl text-white font-bold">All</p>
                  <p className="text-white text-sm">Safe</p>
                </button>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="shadow-lg cursor-pointer bg-orange-600 rounded-xl px-4 py-6 w-full relative">
                <button className="peer px-5 py-2 text-white">
                  <p className="text-2xl text-white font-bold">0</p>
                  <p className="text-white text-sm">Compromised</p>
                </button>
                {/* <div className="hidden rounded-xl peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                            <a
                              className="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Instagram
                            </a>
                            <a
                              className="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              VCET
                            </a>
                            <a
                              className="px-5 py-3 rounded-xl hover:bg-gray-200"
                              href="#"
                            >
                              Event 3
                            </a>
                          </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
            Recently added
            <motion.svg
              width="20"
              height="20"
              className="ml-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </motion.svg>
          </button>
          <span className="text-gray-400">Today's date : {date}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {eventData.map((eventData1, index) => {
            return (
              <div key={index} className="w-full">
                <div className="shadow-lg rounded-xl px-4 py-6 w-full bg-gray-700 relative">
                  <div className="flex">
                    <p className="text-xl w-max text-white font-semibold border-b border-gray-200">
                      {eventData1.notice}
                    </p>
                    <motion.img
                      whileHover={{ rotate: 180 }}
                      onClick={() => {
                        removeTodo(index);
                        navigator.vibrate([75, 10, 10, 75, 10, 10, 75]);
                      }}
                      src={deleteicon}
                      className="w-[35px] mx-2 cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div className="flex items-end px-1 space-x-2 my-6">
                    <p className="text-4xl text-white font-bold">
                      {eventData1.date}
                    </p>
                  </div>

                  <PasswordStrengthMeter password1={eventData1.date} />
                </div>
              </div>
            );
          })}
          <div className="w-full">
            <div className="shadow-lg rounded-xl px-4 py-6 w-full bg-gray-700 relative">
              <p className="text-xl text-black">
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
              {/* <div className="flex items-end space-x-2 mt-3 mb-6"> */}
              <p className="text-xl mt-3 mb-6 text-black">
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
                className="bg-orange-600 transition ease-in font-semibold border-2 border-orange-600 hover:bg-gray-700 hover:text-orange-600 rounded-lg px-3 py-2 text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

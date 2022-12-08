import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import deleteicon from "./delete.png";
import { motion } from "framer-motion";

export default function Dashboard({
  username,
  eventData,
  seteventData,
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

  // Dialogue box / Alert
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={`overflow-auto h-screen pb-24 px-4 md:px-6`}>
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

        {/* Popup dialogue box */}

        <Transition show={isOpen} as={Fragment}>
          <Dialog
            className="fixed top-20 md:left-1/4 xl:left-1/4 z-20 mx-4"
            onClose={() => setIsOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel>
                <div>
                  <div className="rounded-xl max-w-[700px] bg-gray-200 text-white">
                    <div className="bg-red-200 rounded-xl p-2">
                      <div className="flex space-x-2 p-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 stroke-red-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="text-red-700 font-bold">
                          Are you sure you want to delete all the saved
                          passwords?
                        </div>
                      </div>
                      <div className="text-red-700 ml-10 mr-2 mb-2">
                        Doing so will permanently delete the passwords stored.
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="mx-4 my-4 text-black"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          seteventData([]);
                          setIsOpen(!isOpen);
                        }}
                        className="mx-4 mr-4 font-semibold text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>

        <div className="flex items-center space-x-4">
          <span className="text-gray-400">Today's date : {date}</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto font-semibold text-white px-3 py-1 rounded-xl bg-purple-700 border-4 border-purple-600 hover:text-purple-600 hover:bg-transparent"
          >
            Delete all passwords
          </button>
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

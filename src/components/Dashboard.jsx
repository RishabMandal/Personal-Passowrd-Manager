import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import deleteicon from "../assets/delete.png";
import { motion } from "framer-motion";
import { CompromisedPasswords } from "../WeakPasswordList";
import { decrypt } from "n-krypta";
import { passwordfacts } from "./PasswordFacts";
import { NavLink } from "react-router-dom/dist";
import PINLock from "./PINLock";
import { useRef } from "react";
// Custom hook
import { useVisible } from "../useVisible";

export default function Dashboard({
  username,
  eventData,
  seteventData,
  removeTodo,
  setnotice2,
  date2,
  setdate2,
  setData,
  secretKey,
  facts,
  lockdown,
  setLockdown,
  premium,
}) {
  //Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  // Dialogue box / Alert for deleting passwords
  // let [isOpen, setIsOpen] = useState(false);
  let [isOpen, setIsOpen] = useVisible(false);

  // Lockdown mode alert
  let [isOpen3, setIsOpen3] = useVisible(false);

  // Check if password is compromised
  let [isOpen2, setIsOpen2] = useVisible(false);
  function checkPassword(checkpassword) {
    if (CompromisedPasswords.includes(checkpassword)) {
      setIsOpen2(!isOpen2);
    }
  }

  // Input clear
  const inputref1 = useRef();
  const inputref2 = useRef();

  // Secure PIN at the start
  const [PIN_state, setPIN_state] = useState(true);

  // Facts
  const [password_fact, setpasswordfact] = useState(
    passwordfacts[Math.floor(Math.random() * (18 - 0 + 1) + 0)]
  );

  return (
    <div>
      <div className={`overflow-auto h-screen pb-24 px-4 md:px-6`}>
        <h1 className="text-4xl mt-8 font-bold text-white">
          Welcome back, {username}
        </h1>
        <h2 className="text-md mt-2 text-gray-400">
          View and Manage your passwords
        </h2>
        {facts && (
          <div className="text-white text-lg my-2 font-semibold">
            Your daily Password fact:
            {" " + password_fact}
          </div>
        )}
        <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="w-full md:w-6/12">
            <div className="shadow-lg w-full rounded-xl bg-gray-700 relative overflow-hidden">
              <NavLink to="/generator" className="w-full h-full block">
                <div className="flex items-center transition ease-in bg-purple-600 hover:bg-purple-700 rounded-xl justify-between px-4 py-6 space-x-4">
                  <p
                    onClick={() => {
                      navigator.vibrate(50);
                    }}
                    className="text-xl text-white ml-2 font-semibold"
                  >
                    Generate new password
                  </p>
                </div>
              </NavLink>
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

        {/* Popup dialogue box for deleting all passwords */}

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
                        onClick={setIsOpen}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          seteventData([]);
                          // setIsOpen(!isOpen);
                          setIsOpen();
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

        {/* Popup dialogue box for confirming lockdown mode */}

        <Transition show={isOpen3} as={Fragment}>
          <Dialog
            className="fixed top-20 md:left-1/4 xl:left-1/4 z-20 mx-4"
            onClose={() => setIsOpen3(false)}
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
                          Are you sure you want to turn on Lockdown mode?
                        </div>
                      </div>
                      <div className="text-red-700 ml-10 mr-2 mb-2">
                        Doing so will permanently delete the passwords stored in
                        the backend and cut connection with backend.
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        className="mx-4 my-4 text-black"
                        onClick={setIsOpen3}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          // seteventData([]);
                          setIsOpen3(!isOpen3);
                        }}
                        className="mx-4 mr-4 font-semibold text-red-700"
                      >
                        Turn On
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>

        {/* Popup dialogue box for checking compromised passwords */}

        <Transition show={isOpen2} as={Fragment}>
          <Dialog
            className="fixed top-20 md:left-1/4 xl:left-1/4 z-20 mx-4"
            onClose={() => setIsOpen2(false)}
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
                    <div className="bg-red-700 rounded-xl p-2">
                      <div className="flex space-x-2 p-2">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 stroke-white mt-1"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                        <div className="text-white text-3xl font-bold">
                          Oh no -- Compromised !
                        </div>
                      </div>
                      <div className="text-white font-semibold text-xl ml-10 mr-2 mb-2">
                        This password has been seen many times before
                      </div>
                      <div className="text-white text-sm ml-10 mr-2 mb-2">
                        This password has previously appeared in a data breach
                        and should never be used. If you've ever used it
                        anywhere before, change it!
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={setIsOpen2}
                        className="mx-4 mr-4 my-2 font-semibold text-red-600 hover:text-red-700"
                      >
                        Ok I got it
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
            onClick={() => {
              navigator.vibrate(50);
              setIsOpen();
            }}
            className="ml-auto transition ease-in font-semibold text-white px-3 py-1 rounded-xl bg-purple-700 border-4 border-purple-600 hover:text-purple-600 hover:bg-transparent"
          >
            Delete all passwords
          </button>
          {lockdown && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.0}
              stroke="currentColor"
              onClick={setIsOpen3}
              className="w-6 h-6 stroke-white hover:stroke-green-600 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          )}
        </div>
        {premium === "PREMIUM" && (
          <PINLock PIN_state={PIN_state} setPIN_state={setPIN_state} />
        )}
        {(premium !== "PREMIUM" || !PIN_state) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {eventData &&
              eventData.map((eventData1, index) => {
                const decryptData = decrypt(eventData1.date, secretKey);
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
                          className="w-[35px] h-[39px] mx-2 cursor-pointer"
                          alt=""
                        />
                        <motion.svg
                          whileHover={{ scale: 1.2 }}
                          onClick={() => {
                            navigator.vibrate(50);
                            if (eventData1.date.length > 0) {
                              navigator.clipboard.writeText(decryptData);
                            }
                            navigator.vibrate([75, 10, 10, 75]);
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.0}
                          stroke="currentColor"
                          className="w-[36px] h-[40px] mr-2 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                          />
                        </motion.svg>
                      </div>
                      <div className="flex items-end px-1 space-x-2 my-6">
                        <p className="text-4xl text-white font-bold">
                          {decryptData}
                        </p>
                      </div>

                      <PasswordStrengthMeter password1={decryptData} />
                      {/* decryptData is eventData1.date but decrypted */}
                    </div>
                  </div>
                );
              })}
            <div className="w-full">
              <div className="shadow-lg rounded-xl px-4 py-6 w-full bg-gray-700 relative">
                <p className="text-xl text-black">
                  <input
                    ref={inputref1}
                    onClick={() => {
                      navigator.vibrate(50);
                    }}
                    className="w-11/12 text-orange-600 bg-gray-200 rounded-lg p-2"
                    placeholder="Account identifier"
                    type="text"
                    onChange={(event) => {
                      setnotice2(event.target.value);
                    }}
                  />
                </p>
                <p className="text-xl mt-3 mb-6 text-black">
                  <input
                    ref={inputref2}
                    onClick={() => {
                      navigator.vibrate(50);
                    }}
                    className="w-11/12 text-orange-600 bg-gray-200 rounded-lg p-2"
                    placeholder="Password"
                    type="text"
                    onChange={(event) => {
                      setdate2(event.target.value);
                    }}
                  />
                </p>
                <button
                  onClick={() => {
                    checkPassword(date2);
                    setData();
                    inputref1.current.value = "";
                    inputref2.current.value = "";
                    navigator.vibrate([75, 10, 10, 75, 10, 10, 75]);
                  }}
                  className="bg-orange-600 transition ease-in font-semibold border-4 border-orange-600 hover:bg-gray-700 hover:text-orange-600 rounded-lg px-3 py-2 text-white"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

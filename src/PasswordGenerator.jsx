import React, { useState, useEffect } from "react";
import ActualPasswordGen from "./ActualPasswordGen";

export default function PasswordGenerator({ username }) {
  // Password generator visibility
  const [generator_visibility, setgenerator_visibility] = useState("hidden");
  useEffect(() => {
    if (
      username == "Rishab" ||
      username == "Krish" ||
      username == "Vivaan" ||
      username == "Arnav"
    ) {
      setgenerator_visibility("");
    }
  }, []);

  return (
    <>
      {/* // */}
      {/* // */}

      <div
        className={`${generator_visibility} mx-4 pr-4 h-[75vh] overflow-y-scroll`}
      >
        {/* <div className=" overflow-auto h-[1000px]"> */}
        <div className="">
          <div>
            <div className="text-center my-5 text-4xl text-white font-bold mx-auto">
              Generate strong and random passwords
            </div>
          </div>
          <div className="text-center my-5 md:mx-40 text-white font-bold mx-auto">
            Upgrade the security of your online accounts - create strong
            passwords that are completely random and impossible to guess. Select
            the length of your new password, choose what symbols to include and
            copy your password easily!
          </div>
          {/* <div class="w-full">
            <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
              <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
                facebook
              </p>
              <div class="flex items-end space-x-2 my-6">
                <p class="text-5xl text-black dark:text-white font-bold">
                  xyz@123
                </p>
                <div>
                  <button className="bg-purple-600 text-white rounded-lg px-3 py-2">
                    Copy Password
                  </button>
                </div>
              </div>
              <div class="flex items-end space-x-2 my-6 text-white">
                <div className="block w-full ">Password strength : </div>
                <div className="block w-full ">Password length : </div>
              </div>
            </div>
          </div> */}

          {/* // */}

          <ActualPasswordGen />

          {/* // */}
        </div>
      </div>
      <div
        className={`${
          generator_visibility == "hidden" ? "" : "hidden"
        } text-white text-3xl`}
      >
        <div className="text-red-600 my-2">Oops !</div>
        This feature is available only for premium members
      </div>
    </>
  );
}

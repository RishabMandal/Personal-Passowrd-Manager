import React from "react";
import ActualPasswordGen from "./ActualPasswordGen";

export default function PasswordGenerator({ premium }) {
  return (
    <>
      {premium === "PREMIUM" ? (
        <div className={`ml-4 pr-4 h-[85vh] overflow-y-scroll`}>
          {/* <div className=" overflow-auto h-[1000px]"> */}
          <div className="">
            <div>
              <div className="text-center my-5 text-4xl text-white font-bold mx-auto">
                Generate strong and random passwords
              </div>
            </div>
            <div className="text-center my-5 max-w-[500px] text-white font-bold mx-auto">
              Upgrade the security of your online accounts - create strong
              passwords that are completely random and impossible to guess.
              Select the length of your new password, choose what symbols to
              include and copy your password easily!
            </div>

            {/* // */}

            <ActualPasswordGen />

            {/* // */}
          </div>
        </div>
      ) : (
        <div className={`text-white text-3xl`}>
          <div className="text-red-600 my-2">Oops !</div>
          This feature is available only for premium members.
        </div>
      )}
    </>
  );
}

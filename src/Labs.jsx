import React from "react";
import Checkbox from "./Checkbox";

export default function Labs({
  premium,
  facts,
  setFacts,
  lockdown,
  setLockdown,
}) {
  return (
    <>
      {premium === "PREMIUM" ? (
        <div>
          <div className="text-4xl font-bold text-white my-4">
            Experimental Features
          </div>
          <div className="">
            <div className="flex text-white mx-4 my-4">
              Double encryption for all the stored passwords
              <Checkbox value={true} />
            </div>
            <div
              onClick={() => setLockdown(!lockdown)}
              className="flex text-white mx-4 my-4"
            >
              Lockdown mode (This mode stores all the passwords locally on
              device only and turns off internet access fully for these
              passwords.)
              <Checkbox value={lockdown} />
            </div>
            <div
              onClick={() => {
                setFacts(!facts);
              }}
              className="flex text-white mx-4 my-4"
            >
              Turn on facts about passwords
              <div>
                <Checkbox value={facts} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`text-white text-3xl`}>
          <div className="text-red-600 my-2">Oops !</div>
          This feature is available only for our premium members.
        </div>
      )}
    </>
  );
}

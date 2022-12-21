import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { encrypt, decrypt } from "n-krypta";

export default function PINLock({ PIN_state, setPIN_state }) {
  const secretKey = "PIN";
  const originalPIN_ref = useRef();
  const PIN_ref = useRef();
  const [originalPIN, setoriginalPIN] = useState(null);
  const setPIN = () => {
    localStorage.setItem(
      "PIN",
      encrypt(originalPIN_ref.current.value, secretKey)
    );
    setoriginalPIN(originalPIN_ref.current.value);
  };
  const handleSubmit = () => {
    if (originalPIN === PIN_ref.current.value && originalPIN !== null) {
      setPIN_state(false);
    } else {
      PIN_ref.current.value = "Wrong PIN";
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("PIN");
    if (data !== null) {
      setoriginalPIN(decrypt(data, secretKey));
    }
  }, []);

  return (
    <>
      {PIN_state && (
        <div className="text-white bg-gray-700 inline-block rounded-xl px-6 pb-2 my-6">
          <div className="font-bold text-2xl my-2">Enter PIN</div>
          {originalPIN === null && (
            <div>
              <div className=" my-2">Enter a PIN</div>
              <div>
                <input
                  className="text-black rounded-xl px-3 py-2 font-bold my-2"
                  ref={originalPIN_ref}
                  placeholder="Enter 6 digit PIN"
                  type="number"
                />
              </div>
              <button
                className="bg-orange-600 transition ease-in font-semibold border-2 border-orange-600 hover:bg-gray-700 hover:text-orange-600 rounded-lg px-3 py-2 my-1 text-white"
                onClick={setPIN}
              >
                Set PIN
              </button>
            </div>
          )}
          {originalPIN !== null && (
            <div>
              <div>
                <input
                  placeholder="Enter PIN to continue"
                  className="text-black rounded-xl px-3 py-2 font-bold my-2"
                  ref={PIN_ref}
                  type="number"
                />
              </div>
              <button
                className="bg-orange-600 transition ease-in font-semibold border-2 border-orange-600 hover:bg-gray-700 hover:text-orange-600 rounded-lg px-3 py-2 my-1 text-white"
                onClick={handleSubmit}
              >
                Unlock
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

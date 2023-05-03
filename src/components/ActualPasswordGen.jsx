import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Checkbox from "./Checkbox";
import { useNavigate } from "react-router-dom";

export default function ActualPasswordGen() {
  let [isOpen, setIsOpen] = useState(false);

  const [passwordGen, setPasswordGen] = useState({
    length: 10,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [handelText, setHandelText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChangeUppercase = () => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = () => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };

  const handleChangeNumbers = () => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeSymbols = () => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  const setPasswordLength = (val) => {
    if (val < 10) {
      setIsOpen(!isOpen);
    }
    setPasswordGen({
      ...passwordGen,
      length: val,
    });
  };

  function generatePassword() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols } = passwordGen;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandelText(characters.join(""));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <div className="container wrapper-box p-4 lg:p-8 mx-auto bg-gray-700 rounded-xl">
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
                            Password too short !
                          </div>
                        </div>
                        <div className="text-white font-semibold text-xl ml-10 mr-2 mb-2">
                          It is recommended that the password length must be
                          atleast of 10 characters.
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setIsOpen(!isOpen);
                          }}
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
          {/* </div> */}
          {/* <h2>Password Generator</h2> */}
          <div className="password-box drop-shadow-lg">
            <input
              className="rounded-lg px-3 py-2 mb-4 font-bold"
              type="text"
              value={handelText}
              placeholder="Generated Password"
              autoComplete="off"
              onChange={(e) => setHandelText(e.target.value)}
            />
            <button
              className="font-semibold transition ease-in copy-button mx-4 text-white bg-purple-600 drop-shadow-lg hover:bg-purple-700 px-3 py-2 rounded-lg"
              onClick={() => {
                navigator.vibrate(50);
                if (handelText.length > 0) {
                  navigator.clipboard.writeText(handelText);
                  setCopied(true);
                  setInterval(() => {
                    setCopied(false);
                  }, 2000);
                }
              }}
            >
              {copied ? "Copied!" : "Copy text"}
            </button>
          </div>
          <br />
          <div className="flex mx-auto my-1 justify-center text-center  text-lg word-crieteria__box">
            <div>
              <label className="text-white font-semibold mr-4">
                Password length
              </label>
            </div>
            <div>
              <input
                className="rounded-lg text-center px-2 font-bold drop-shadow-lg"
                type="number"
                min="4"
                max="20"
                value={passwordGen.length}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mx-auto my-1 justify-center text-center  text-lg word-crieteria__box">
            <div>
              <label className="text-white font-semibold my-1">
                Include uppercase letters
              </label>
            </div>
            <div>
              <Checkbox
                value={passwordGen.uppercase}
                onChange={handleChangeUppercase}
              />
            </div>
          </div>
          <div className="flex mx-auto my-1 justify-center text-center  text-lg word-crieteria__box">
            <div>
              <label className="text-white font-semibold my-1">
                Include lowercase letters
              </label>
            </div>
            <div>
              <Checkbox
                value={passwordGen.lowercase}
                onChange={handleChangeLowercase}
              />
            </div>
          </div>
          <div className="flex mx-auto my-1 justify-center text-center  text-lg word-crieteria__box">
            <div>
              <label className="text-white font-semibold my-1">
                Include numbers
              </label>
            </div>
            <div>
              <Checkbox
                value={passwordGen.numbers}
                onChange={handleChangeNumbers}
              />
            </div>
          </div>
          <div className="flex mx-auto my-1 justify-center text-center  text-lg word-crieteria__box">
            <div>
              <label className="text-white font-semibold my-1">
                Include symbols
              </label>
            </div>
            <div>
              <Checkbox
                value={passwordGen.symbols}
                onChange={handleChangeSymbols}
              />
            </div>
          </div>
          <div>
            <button
              className="block mx-auto generate-button transition ease-in font-semibold my-4 text-white bg-purple-600 drop-shadow-lg hover:bg-purple-700 px-3 py-2 rounded-lg"
              onClick={() => {
                navigator.vibrate(50);
                generatePassword();
              }}
            >
              Generate password
            </button>
            <button
              className="block mx-auto generate-button transition ease-in font-semibold my-4 text-white bg-purple-600 drop-shadow-lg hover:bg-purple-700 px-3 py-2 rounded-lg"
              onClick={() => {
                navigator.vibrate(50);
                // generatePassword();
                navigate("/passwordimage");
              }}
            >
              Generate password using an Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

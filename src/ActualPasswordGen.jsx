import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function ActualPasswordGen() {
  //

  const [passwordGen, setPasswordGen] = useState({
    length: 5,
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

  //

  return (
    <>
      {/* <div className="text-white">ActualPasswordGen</div>; */}
      <div className="wrapper">
        <div className="container wrapper-box p-4 lg:p-8 mx-auto bg-gray-200 rounded-xl">
          {/* <h2>Password Generator</h2> */}
          <div className="password-box drop-shadow-lg">
            <input
              className="rounded-lg px-3 py-2 mb-4 font-bold"
              type="text"
              value={handelText}
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setHandelText(e.target.value)}
            />
            <button
              className="copy-button mx-4 text-white bg-purple-600 drop-shadow-lg hover:bg-purple-700 px-3 py-2 rounded-lg"
              onClick={() => {
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
              <label className="font-semibold mr-4">Password length</label>
            </div>
            <div>
              <input
                className="rounded-lg px-2 font-bold drop-shadow-lg"
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
              <label className="font-semibold my-1">
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
              <label className="font-semibold my-1">
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
              <label className="font-semibold my-1">Include numbers</label>
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
              <label className="font-semibold my-1">Include symbols</label>
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
              className="generate-button my-4 text-white bg-purple-600 drop-shadow-lg hover:bg-purple-700 px-3 py-2 rounded-lg"
              onClick={generatePassword}
            >
              Generate password
            </button>
          </div>
        </div>
      </div>
      {/* // */}
    </>
  );
}

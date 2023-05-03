import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { ColorExtractor } from "react-color-extractor";

const PasswordFromImage = () => {
  const [images, setImages] = useState();
  // const [imageName, setImageName] = useState("Cat");
  const [colorArray, setColorArray] = useState([]);
  const [selectedPicNumber, setselectedPicNumber] = useState();
  // const [randomImageId, setRandomImageId] = useState(Math.floor(Math.random() * 26));

  function getRandomNumber() {
    return Math.floor(Math.random() * 29) + 1;
  }

  useEffect(() => {
    axios.get("https://picsum.photos/v2/list").then((res) => {
      //   console.log(res.data);
      setImages(res.data);
    });
  }, []);

  const [password, setpassword] = useState();
  const [Makepassword, setMakePassword] = useState("");

  const [darkMode, setDarkMode] = useState("dark");

  function generatePassword(arr) {
    console.log(Array.prototype.join.call(arr));
    // console.table(Array.prototype.join.call(arr));
    // setpassword(...password, Array.prototype.join.call(arr));
    setpassword(Array.prototype.join.call(arr));
    // console.log(password);
  }

  function makepassword() {
    var chars = "!~/-^";
    var a = password.split("");
    var randomNumber = Math.floor(Math.random() * a.length + 1);
    a.splice(randomNumber, 0, chars);
    setMakePassword(a.join(""));
  }

  useEffect(() => {
    console.log(password);
    if (password) makepassword();
  }, [password]);

  // Image shuffling
  // select 9 random images from the array
  const randomNumber = Math.floor(Math.random() * 24) + 6;
  // const randomNumber = 15;
  // const selectedImages =
  //   images &&
  //   randomNumber != 0 &&
  //   [...images].slice(randomNumber, randomNumber + 9);
  //   console.log(selectedImages);

  return (
    <>
      <div
        className={`${darkMode} max-h-screen pt-5 overflow-y-scroll`}
        style={{
          backgroundImage:
            darkMode === "dark"
              ? "radial-gradient(#ffffff 2px, #000000 2px)"
              : "radial-gradient(#000000 2px, #ffffff 2px)",
          backgroundSize: darkMode === "dark" ? "50px 50px" : "50px 50px",
        }}
      >
        <div className=" dark:text-white duration-300 h-full">
          <div className="text-4xl py-5 font-bold w-fit mx-auto dark:bg-black bg-white font-serif">
            Password From Image
          </div>
          <button
            className="cursor-pointer border-2 w-fit p-2 rounded-lg mx-1 dark:bg-black bg-white"
            onClick={() => setDarkMode("dark")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </button>
          <button
            className="cursor-pointer border-2 w-fit p-2 rounded-lg mx-1 dark:bg-black bg-white"
            onClick={() => setDarkMode("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 hover:rotate-90 transition ease-in"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </button>
        </div>
        <div className="text-xl font-semibold w-fit pt-5 mx-auto dark:bg-black bg-white px-3 dark:text-white duration-300">
          Choose an image from your personalized order
        </div>
        <div className=" dark:text-white duration-300 mb-10">
          <div className="grid grid-cols-3 w-fit h-fit mx-auto py-10">
            {images &&
              images.slice(0, 9).map((singleimage, i) => {
                {
                  /* {selectedImages &&
              selectedImages.map((singleimage, i) => { */
                }
                return (
                  <div
                    key={i}
                    className="w-fit dark:bg-white bg-black m-1 h-fit border-4 rounded-md dark:border-white border-black"
                  >
                    <ColorExtractor
                      getColors={(colors) => {
                        console.log(colors);
                        setColorArray(colors);
                      }}
                    >
                      <img
                        // src={`https://picsum.photos/id/${i + 1}/200/200`}
                        // src={`https://picsum.photos/id/${randomNumber}/200/200`}
                        src={`https://picsum.photos/id/${
                          randomNumber + i
                        }/200/200`}
                        // src={`https://picsum.photos/id/${getRandomNumber()}/200/200`}
                        // src={`https://picsum.photos/id/${Math.floor(Math.random() * 30)}/200/200`}
                        // src={singleimage.url}
                        alt=""
                        className="w-fit h-fit rounded-md cursor-pointer hover:scale-95 transition ease-in"
                        onClick={() => {
                          setselectedPicNumber(i + 1);
                          console.log(singleimage);
                          console.log(colorArray);
                          generatePassword(colorArray);
                        }}
                      />
                    </ColorExtractor>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className={`${darkMode} w-[20vw] p-5 fixed overflow-x-scroll top-20 m-10 dark:bg-black bg-white dark:text-white border-2 rounded-md`}
        >
          <div className="text-lg">
            Selected image number is {selectedPicNumber}
          </div>
          <div className="my-5 text-sm ">
            Color codes : {password ? password : "Please select an image first"}
          </div>
          <button
            className="border-2 rounded-lg py-3 px-5 font-semibold hover:bg-white hover:text-black duration-300 hover:font-bold"
            onClick={() => {
              if (window.confirm("You will lose your previous password!")) {
                window.location.reload();
              }
            }}
          >
            Retry
          </button>
        </div>
        <div
          className={`${darkMode} overflow-hidden w-[20vw] p-5 fixed top-20 right-0 m-10 dark:bg-black bg-white dark:text-white border-2 rounded-md`}
        >
          <div>
            Your Password :
            {" " + Makepassword.replaceAll(",", "").replaceAll("#", "")}
          </div>
          <button
            className="border-2 rounded-lg py-3 px-5 mt-5 font-semibold hover:bg-white hover:text-black duration-300 hover:font-bold"
            onClick={() => {
              alert("Password copied");
              navigator.clipboard.writeText(
                " " + Makepassword.replaceAll(",", "").replaceAll("#", "")
              );
            }}
          >
            Copy Password
          </button>
        </div>
      </div>
    </>
  );
};

export default PasswordFromImage;

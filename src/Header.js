import React, { useState, useRef } from "react";
import BelowHeader from "./BelowHeader";
import LoggedinContent from "./LoggedinContent";
import LoginForm from "./LoginForm";
import logo from "./Logo1.png";

export default function () {
  const [Admin, setAdmin] = useState({
    name: localStorage.getItem("Name"),
    password: localStorage.getItem("Password"),
  });
  // const [User, setUser] = useState({ name: "", password: "" });
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [Login, setLogin] = useState("false");

  // View Login Page
  const [loginpage, setLoginpage] = useState("hidden");

  // Scroll to premium
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <>
      <div>
        <div>
          {name === Admin.name &&
          password === Admin.password &&
          Login === "true" ? (
            <>
              <LoggedinContent username={Admin.name} />
            </>
          ) : (
            <>
              <header className="text-gray-600 bg-gray-200 pt-4 body-font">
                <div className="container bg-white rounded-xl drop-shadow-lg shadow-black mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <img
                      onClick={() => {
                        window.location.reload(true);
                      }}
                      src={logo}
                      className="cursor-pointer hidden md:block lg:block xl:block w-40 mx-[-10px] my-[-10px] rounded-md"
                      alt=""
                    />
                    <span
                      onClick={() => {
                        window.location.reload(true);
                      }}
                      className="cursor-pointer md:hidden lg:hidden xl:hidden ml-3 text-xl"
                    >
                      PersonalPass
                    </span>
                  </a>
                  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a
                      onClick={() => {
                        window.location.reload(true);
                      }}
                      className=" cursor-pointer mr-5 hover:text-gray-900"
                    >
                      Home
                    </a>
                    <a
                      onClick={executeScroll}
                      className=" cursor-pointer mr-5 hover:text-green-600"
                    >
                      Premium
                    </a>
                    <a
                      onClick={() => {
                        if (setLoginpage === "") {
                          setLoginpage("hidden");
                        } else {
                          setLoginpage("");
                        }
                      }}
                      className="mr-3 cursor-pointer text-white bg-red-700 py-2 px-4 rounded-xl"
                    >
                      Login
                    </a>
                    <a
                      onClick={() => {
                        if (setLoginpage === "") {
                          setLoginpage("hidden");
                        } else {
                          setLoginpage("");
                        }
                      }}
                      className="mr-5 cursor-pointer text-white bg-blue-600 py-2 px-4 rounded-xl"
                    >
                      Register
                    </a>
                  </nav>
                </div>
              </header>
              <div className={`${loginpage === "" ? "hidden" : ""}`}>
                <BelowHeader myRef={myRef} executeScroll={executeScroll} />
              </div>
              <div className={`${loginpage} w-screen`}>
                <LoginForm
                  password={{ password, setpassword }}
                  name={{ name, setname }}
                  login={{ Login, setLogin }}
                  // Signup={{ SignUpstate, setSignUpstate }}
                  admin={{ Admin, setAdmin }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

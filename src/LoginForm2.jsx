// import SignUp from "./SignUp";
import React, { useState, useEffect } from "react";
// import {
//   HashRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link,
//   NavLink,
// } from "react-router-dom";

export default function LoginForm2({ password, name, login, Signup, admin }) {
  const [nameDetails, setnameDetails] = useState("Name");
  const [passwordDetails, setpasswordDetails] = useState("");
  // //   const [SignUpstate, setSignUpstate] = useState("false");

  // //   console.log(nameDetails);

  useEffect(() => {
    // console.log(nameDetails);
    // User.setUser(nameDetails);
    name.setname(nameDetails);
    password.setpassword(passwordDetails);
  });

  // To make the input editable
  //   function onChangefunc(event) {
  //     setnameDetails(event.target.value);
  //   }

  const [NameDetails, setNameDetails] = useState("");
  const [PasswordDetails, setPasswordDetails] = useState("");

  function settolocal() {
    localStorage.setItem("Name", NameDetails);
    localStorage.setItem("Password", PasswordDetails);
  }

  //   function setloginstatusfunc() {
  //     // Signup.setSignUpstate("true");
  //     if (name != admin.Admin.name && password != admin.Admin.password) {
  //       console.log("Wrong User Details");
  //     }
  //   }

  return (
    <>
      {/* <Router> */}
      {/* Old Section */}
      <section className="bg-gray-200 min-h-screen p-6 items-center w-screen">
        <div className="flex flex-col mx-auto justify-center lg:flex-row xl:flex-row">
          <div className="bg-white lg:w-[50%] xl:w-[50%] max-w-2xl p-5 rounded-l-lg">
            <div className="mt-[10vh] my-auto">
              <div className="text-center mx-auto">
                <img
                  className="w-[185px] mx-auto"
                  alt=""
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                />
                <h4 className="mt-1 text-xl font-bold mb-5 pb-1">
                  Welcome to PersonalPass
                </h4>
              </div>
              <form>
                <p className="text-lg my-3">Please login to your account</p>

                <div className="form-outline my-4">
                  <input
                    type="name"
                    id="form2Example11"
                    className="form-control drop-shadow-md mx-auto md:w-[400px] p-2 rounded-lg border-2 hover:border-[#ee7724] "
                    placeholder="Username"
                    onChange={(e) => {
                      setnameDetails(e.target.value);
                    }}
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example22"
                    className="form-control drop-shadow-md mx-auto md:w-[400px] p-2 rounded-lg border-2 hover:border-[#ee7724]"
                    placeholder="Master Password"
                    onChange={(e) => {
                      setpasswordDetails(e.target.value);
                    }}
                  />
                </div>

                {/* Error */}
                <div className="hidden">Error</div>

                <div className="flex items-center gap-8">
                  <label className="inline-flex mx-auto items-center">
                    <input
                      type="radio"
                      name="vehicle"
                      className="h-5 w-5 text-red-600"
                    />
                    <span
                      onClick={() => {
                        navigator.vibrate(50);
                      }}
                      className="ml-2 text-gray-600"
                    >
                      I am not a ROBOT
                    </span>
                  </label>
                </div>

                <div className="text-center pt-1 my-5 pb-1">
                  <button
                    className="block drop-shadow-xl fa-lg bg-gradient-to-r from-[#ee7724] via-red-600 via-[#dd3675] to-[#b44593] px-4 py-2 rounded-lg text-white mx-auto mb-3"
                    type="button"
                    onClick={() => {
                      navigator.vibrate(50);
                      login.setLogin("true");
                    }}
                  >
                    LOG IN
                  </button>
                </div>

                <div className="inline-block mx-auto">
                  <div className="flex space-x-2 align-items-center justify-content-center pb-4">
                    <p className="my-auto">Don't have an account?</p>
                    <button
                      type="button"
                      className="bg-red-600 border-2 border-red-600 py-2 px-4 rounded-lg text-white hover:text-red-600 hover:bg-white"
                      onClick={() => {
                        navigator.vibrate(50);
                        Signup.setSignUpstate("true");
                      }}
                    >
                      CREATE NEW
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="bg-orange-600 p-5"> */}
          <div className="rounded-r-lg lg:w-[50%] xl:w-[50%] max-w-2xl items-center bg-gradient-to-r from-[#ee7724] via-red-600 to-[#b44593]">
            <div className="text-white my-[30vh] px-16 py-4">
              {/* <div className="text-white inline-block px-16 py-4 my-auto"> */}
              <div className="inline-block">
                <h4 className="my-4 text-3xl font-bold">
                  Secure, anonymous, stateless password manager
                </h4>
                <p className="text-md mt-2">
                  We do not use cookies, tracking scripts or any third party in
                  browser software.
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
      {/* </Router> */}
    </>
  );
}

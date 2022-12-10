import React, { useState } from "react";
import { auth, provider } from "./firebase.js";
import { signInWithPopup } from "firebase/auth";

export default function SignUp({ admin, Signup }) {
  const [NameDetails, setNameDetails] = useState("");
  const [PasswordDetails, setPasswordDetails] = useState("");

  function settolocal() {
    localStorage.setItem("Name", NameDetails);
    localStorage.setItem("Password", PasswordDetails);
  }

  // Google sign in
  const [useremail, setuseremail] = useState();
  
  function handlesignin() {
    signInWithPopup(auth, provider).then((data) => {
      setuseremail(data.user.email);
      
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.displayName);
      window.location.reload();
    });
  }

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="text-center min-h-[89vh] bg-[#eee]">

        <div
          className="min-h-[89vh] p-2 text-white bg-[url('https://mdbootstrap.com/img/new/textures/full/171.jpg')] card shadow-5-strong backdrop-blur-[30px]"
          style={
            {
              // margin-top: -100px;
              // background: hsla(0, 0%, 100%, 0.8);
            }
          }
        >
          <div className="rounded-xl card-body m-2 bg-white bg-opacity-25 backdrop-filter backdrop-blur-lg py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="font-bold text-3xl mb-5">
                  Sign up to PersonalPass
                </h2>
                <form>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  {/* <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline mb-4">
                        <input
                          type="name"
                          className="form-control text-blue-700 p-2 rounded-md drop-shadow-md "
                          placeholder="First Name"
                          onChange={(e) => {
                            setNameDetails(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline mb-4">
                        <input
                          type="name"
                          className="form-control text-blue-700 p-2 rounded-md drop-shadow-md"
                          placeholder="Last Name (Optional)"
                          onChange={(e) => {
                            // setNameDetails(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Email input --> */}
                  {/* <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control text-blue-700 p-2 rounded-md drop-shadow-md "
                      placeholder="Email address (Optional)"
                    />
                  </div> */}

                  {/* <!-- Password input --> */}
                  {/* <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control text-blue-700 p-2 rounded-md drop-shadow-md "
                      placeholder="Master Password"
                      onChange={(e) => {
                        setPasswordDetails(e.target.value);
                      }}
                    />
                  </div> */}

                  {/* <!-- Checkbox --> */}
                  <div className="form-check flex justify-center mb-4">
                    <input
                      className="form-check-input w-4 h-4 mt-1 mr-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      //   checked
                    />
                    <label
                      className=" form-check-label"
                      htmlFor="form2Example33"
                    >
                      Creating an account means you’re okay with our Terms of
                      Service, Privacy Policy, and our default Notification
                      Settings.
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  {/* <button
                    type="button"
                    className="bg-red-600 hover:bg-red-700 transition ease-in rounded-lg px-3 pt-1 pb-2 text-white mb-4"
                    // onClick={settolocal}
                    onClick={() => {
                      navigator.vibrate(50);
                      Signup.setSignUpstate("false");
                      settolocal();
                    }}
                  >
                    Sign Up
                  </button> */}

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    {/* <p>or sign up with :</p> */}
                    <p>Sign up with :</p>

                    <button
                      // onClick={() => {
                      //   navigator.vibrate(50);
                      // }}
                      onClick={handlesignin}
                      type="button"
                      className="py-2 px-4 w-4/12 mx-auto my-2 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      <div>Sign up with Google</div>
                    </button>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div>Already a member?</div>
                    <div
                      onClick={() => {
                        navigator.vibrate(50);
                        Signup.setSignUpstate("false");
                      }}
                      className="cursor-pointer hover:underline underline-offset-2 text-blue-800"
                    >
                      Sign in
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
}

import React, { useState } from "react";

export default function SignUp({ admin, Signup }) {
  const [NameDetails, setNameDetails] = useState("");
  const [PasswordDetails, setPasswordDetails] = useState("");

  function settolocal() {
    localStorage.setItem("Name", NameDetails);
    localStorage.setItem("Password", PasswordDetails);
  }

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="text-center bg-[#eee] pb-5">
        {/* <!-- Background image --> */}
        <div
          className="p-5 bg-image "
          style={
            {
              //   background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
              //   height: 300px;
            }
          }
        ></div>
        {/* <!-- Background image --> */}

        <div
          className="card mx-4 mx-md-5 shadow-5-strong mt-[-40px] backdrop-blur-[30px]"
          style={
            {
              // margin-top: -100px;
              // background: hsla(0, 0%, 100%, 0.8);
              //   backdrop-filter: "blur(30px)",
            }
          }
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="font-bold text-3xl mb-5">Sign up now</h2>
                <form>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline mb-4">
                        <input
                          type="name"
                          // id="form2Example1"
                          className="form-control p-2 rounded-md drop-shadow-md "
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
                          // id="form2Example1"
                          className="form-control p-2 rounded-md drop-shadow-md"
                          placeholder="Last Name"
                          onChange={(e) => {
                            // setNameDetails(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control p-2 rounded-md drop-shadow-md "
                      placeholder="Email address"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control p-2 rounded-md drop-shadow-md "
                      placeholder="Password"
                      onChange={(e) => {
                        setPasswordDetails(e.target.value);
                      }}
                    />
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2 mr-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      //   checked
                    />
                    <label className="form-check-label" for="form2Example33">
                      Remember me
                    </label>
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="button"
                    className="bg-red-600 rounded-lg px-3 py-2 text-white mb-4"
                    // onClick={settolocal}
                    onClick={() => {
                      navigator.vibrate(50);
                      Signup.setSignUpstate("false");
                      settolocal();
                    }}
                  >
                    Sign Up
                  </button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>or sign up with :</p>

                    <button
                      onClick={() => {
                        navigator.vibrate(50);
                      }}
                      type="button"
                      class="py-2 px-4 w-4/12 mx-auto my-2 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                      </svg>
                      Sign in with Google (Coming Soon)
                    </button>

                    <button
                      type="button"
                      class="py-2 px-4 w-4/12 mx-auto my-2 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                      </svg>
                      Sign in with Facebook (Coming Soon)
                    </button>
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

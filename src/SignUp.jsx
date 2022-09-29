import React, { useState } from "react";

export default function SignUp({admin,Signup}) {
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
            style={{
        //   background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        //   height: 300px;
            }}
        ></div>
        {/* <!-- Background image --> */}

        <div
          className="card mx-4 mx-md-5 shadow-5-strong mt-[-40px] backdrop-blur-[30px]"
          style={{
            // margin-top: -100px;
            // background: hsla(0, 0%, 100%, 0.8);
            //   backdrop-filter: "blur(30px)",
          }}
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
                          id="form2Example1"
                          className="form-control"
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
                          id="form2Example1"
                          className="form-control"
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
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => {
                        setPasswordDetails(e.target.value);
                      }}
                    />
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
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
                        Signup.setSignUpstate("false");
                        settolocal();
                      }}
                  >
                    Sign Up
                  </button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
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

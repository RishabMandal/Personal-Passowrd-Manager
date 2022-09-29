import SignUp from "./SignUp";
import LoginForm2 from "./LoginForm2";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

export default function LoginForm({ password, name, login, admin }) {
  // const [nameDetails, setnameDetails] = useState("Name");
  // const [passwordDetails, setpasswordDetails] = useState("");
  const [SignUpstate, setSignUpstate] = useState("false");

  //   console.log(nameDetails);

  useEffect(() => {
    // console.log(nameDetails);
    // User.setUser(nameDetails);
    // name.setname(nameDetails);
    // password.setpassword(passwordDetails);
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

  return (
    <>
      {/* <Router> */}
        {SignUpstate === "true" ? (
          <>
            <SignUp admin={admin} Signup={{SignUpstate, setSignUpstate}}/>
          </>
        ) : (
          <LoginForm2
            password={password}
            name={name}
            login={login}
            Signup={{ SignUpstate, setSignUpstate }}
            admin={admin}
          />
        )}
      {/* </Router> */}
    </>
  );
}

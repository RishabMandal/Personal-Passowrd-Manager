import React from "react";
import { NavLink } from "react-router-dom/dist";

export default function Error() {
  return (
    <div>
      <div className="text-9xl text-red-600">404</div>
      <div className="text-5xl my-5 font-bold text-red-600">Oops!</div>
      <div className="text-white mb-5">
        We can't seem to find the page you are looking for
      </div>
      <NavLink
        to="/"
        className="text-white transition ease-in font-semibold hover:text-green-600 hover:border-green-600 border-2 rounded-lg px-3 py-2"
      >
        Back to Dashboard
      </NavLink>
    </div>
  );
}

import React, { useState } from "react";

export default function Feedback() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="text-white">
      <div className="text-4xl font-bold">Feedback</div>
      <div className="text-xl font-semibold my-4 mx-2">
        If you face any issue, feel free to contact us, we will get back to you
        as soon as we can! Premium members will get priority support.
      </div>
      <div className="flex justify-center space-x-3">
        <input
          type="text"
          placeholder="Type your message here"
          className="bg-gray-800 border-4 border-orange-600 py-2 px-3 rounded-xl text-orange-600"
        />
        <button
          onClick={() => setisOpen(!isOpen)}
          className="font-semibold border-4 border-orange-600 bg-orange-600 px-3 py-2 rounded-xl hover:bg-transparent transition ease-in hover:text-orange-600"
        >
          Send
        </button>
      </div>
      {isOpen && (
        <div className="text-xl my-2">Thank you for connecting with us.</div>
      )}
    </div>
  );
}

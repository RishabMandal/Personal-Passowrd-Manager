import React from "react";

export default function Checkbox(props) {
  const { value, onChange } = props;
  return (
    <div>
      <div className="ml-4">
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="Blue"
            checked={value}
            onChange={onChange}
            className="checked:bg-orange-600 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="Blue"
            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
}

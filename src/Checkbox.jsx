import React from "react";

export default function Checkbox(props) {
  const { value, onChange } = props;
  return (
    <div>
      {/* <input
        className="mx-4 w-[30px]"
        type="checkbox"
        checked={value}
        onChange={onChange}
      /> */}
      {/* // */}
      <div className="ml-4">
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="toggle"
            id="Blue"
            checked={value}
            onChange={onChange}
            class="checked:bg-orange-600 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            for="Blue"
            class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
          ></label>
        </div>
        {/* <span class="text-gray-400 font-medium">Blue</span> */}
      </div>
      {/* // */}
    </div>
  );
}

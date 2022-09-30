import React from "react";

export default function PasswordGenerator() {
  return (
    <div className="mx-4">
      <div>
        <div className="text-center my-5 text-4xl text-white font-bold mx-auto">
          Generate strong and random passwords
        </div>
      </div>
      <div className="text-center my-5 md:mx-60 text-white font-bold mx-auto">
        Upgrade the security of your online accounts - create strong passwords
        that are completely random and impossible to guess. Select the length of
        your new password, choose what symbols to include and copy your password
        easily!
      </div>
      <div class="w-full">
        <div class="shadow-lg rounded-xl px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
          <p class="text-xl w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
            facebook
          </p>
          <div class="flex items-end space-x-2 my-6">
            <p class="text-5xl text-black dark:text-white font-bold">xyz@123</p>
            <div>
              <button className="bg-purple-600 text-white rounded-lg px-3 py-2">
                Copy Password
              </button>
            </div>
          </div>
          <div class="flex items-end space-x-2 my-6 text-white">
            <div className="block w-full ">Password strength : </div>
            <div className="block w-full ">Password length : </div>
          </div>
        </div>
      </div>
    </div>
  );
}

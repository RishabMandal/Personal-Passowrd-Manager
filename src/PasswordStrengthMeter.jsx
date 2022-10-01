import React, { useState } from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password1 }) => {
  const testResult = zxcvbn(password1);
  console.log(testResult);
  const num = testResult.score;

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very weak";
      case 1:
        return "Weak";
      case 2:
        return "Fear";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "red";
      case 1:
        return "red";
      case 2:
        return "orange";
      case 3:
        return "green";
      case 4:
        return "green";
      default:
        return "none";
    }
  };

  return (
    <>
      <div className="text-white">
        <div className="mb-2">
          <div class="w-full h-2 bg-gray-400 rounded-full mt-3">
            <div
              class={`w-${
                num == 0 ? 1 : num
              }/4 h-full text-center text-xs text-white bg-${funcProgressColor()}-500 rounded-full`}
            ></div>
          </div>
        </div>
        <div className={`text-${funcProgressColor()}-500`}>{createPassLabel()}</div>
      </div>
    </>
  );
};

export default PasswordStrengthMeter;

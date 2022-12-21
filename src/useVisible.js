import { useState } from "react";

export const useVisible = (initialState = false) => {
  const [visible, setvisible] = useState(initialState);

  const toggle = () => {
    setvisible(!visible);
  };

  return [visible, toggle];
};

import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = (props) => {
  const [state, setState] = useState("Login");

  const value = {
    state,
    setState,
  };

  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
};

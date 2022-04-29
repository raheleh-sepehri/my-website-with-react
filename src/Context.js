import { createContext, useReducer } from "react";

export const themeContext = createContext();

const intialstate = { darkMode: false };
const themeRaducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};
export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeRaducer, intialstate);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};

import "./Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clickHandler = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={clickHandler}>
      <Sun />
      <Moon />
      <div
        className="t-btn"
        style={darkMode ? { right: "2px" } : { left: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;

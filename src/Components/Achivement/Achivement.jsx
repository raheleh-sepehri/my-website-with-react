import "./Achivement.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Achivement = ({ content, span2, span1 }) => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  return (
    <>
      <div className="circle">
        <div
          className="number"
          style={darkMode ? { color: "black" } : { color: "" }}
        >
          {content}{" "}
        </div>
      </div>
      <div className="e-dtaile">
        <span>{span1}</span>
        <span>{span2}</span>
      </div>
    </>
  );
};

export default Achivement;

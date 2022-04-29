import "./Myservice.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Myservice = ({ imgSrc, title, content }) => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  return (
    <div className="myservice">
      <div className="ms-content">
        <div className="imoji">
          <img src={imgSrc}></img>
        </div>
        <span style={darkMode ? { color: "white" } : { color: "" }}>
          {title}
        </span>
        <span>{content}</span>
        <button className="ms-btn">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Myservice;

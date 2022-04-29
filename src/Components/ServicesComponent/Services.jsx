import Myservice from "../MyService/Myservice";
import "./Services.css";
import glasses from "../../img/glasses.png";
import heartemoji from "../../img/heartemoji.png";
import humble from "../../img/humble.png";
import Resume from "./myResume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <section className="servise" id="Services">
      <div className="s-left">
        <div className="s-title">
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            My Awesome
          </span>
          <span>services</span>
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            <br />
            ipsum recusandae repudiandae debitis facere fuga voluptatem
          </span>
        </div>
        <a href={Resume} download>
          {" "}
          <button className="button s-button">Download CV</button>
        </a>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-6rem",
          }}
        ></div>
      </div>
      <div className="s-right">
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "18rem" }}
          transition={transition}
          style={{ position: "absolute", left: "14rem" }}
        >
          <Myservice
            imgSrc={heartemoji}
            title="Design"
            content="Figms,Photoshop,Adobe xd"
          />
        </motion.div>
        <div style={{ position: "absolute", left: "-4rem", top: "12rem" }}>
          <Myservice
            imgSrc={glasses}
            title="Design"
            content="Figms,Photoshop,Adobe xd"
          />
        </div>
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
          style={{ position: "absolute", left: "12rem", top: "19rem" }}
        >
          <Myservice
            imgSrc={humble}
            title="Design"
            content="Figms,Photoshop,Adobe xd"
          />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </section>
  );
};

export default Services;

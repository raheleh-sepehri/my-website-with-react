import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  console.log(darkMode);
  return (
    <section className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Hi I am
          </span>
          <span>Raheleh Sepehri</span>
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Frontend developer with hight level of experience in web designing
            and development , producting the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="github" />
          <img src={LinkedIn} alt="github" />
          <img src={Instagram} alt="github" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={girl} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
        />

        <motion.div
          initial={{ left: "74%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ position: "absolute", top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv imgSrc={crown} text1="web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "8rem", top: "18.4rem" }}
          whileInView={{ left: "8px" }}
          transition={transition}
          style={{
            position: "absolute",
            bottom: "95px",
            left: "8px",
            zIndex: 100,
          }}
          className="floating-div"
        >
          <FloatingDiv imgSrc={thumbup} text1="web" text2="Developer" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
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
    </section>
  );
};

export default Intro;

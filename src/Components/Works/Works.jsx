import "./Works.css";
import Upwork from "../../img/Upwork.png";
import amazon from "../../img/amazon.png";
import Facebook from "../../img/Facebook.png";
import fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  return (
    <section className="works">
      <div className="s-left">
        <div className="s-title">
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Works for all theses
          </span>
          <span>Brands & clients</span>
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            <br />
            ipsum recusandae repudiandae debitis facere fuga voluptatem
            <br />
            ipsum recusandae repudiandae debitis facere fuga voluptatem
            <br />
            ipsum recusandae repudiandae debitis facere fuga voluptatem
          </span>
        </div>

        <button className="button s-button">Here me</button>

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
      <div className="w-rigt">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="main-circle"
        >
          <div className="sec-circle">
            <img src={Upwork} />
          </div>
          <div className="sec-circle">
            <img src={Facebook} />
          </div>
          <div className="sec-circle">
            <img src={fiverr} />
          </div>
          <div className="sec-circle">
            <img src={amazon} />
          </div>
          <div className="sec-circle">
            <img src={Shopify} />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backcircle blue-circle"></div>
        <div className="w-backcircle yellow-circle"></div>
        <div> </div>
      </div>
    </section>
  );
};

export default Works;

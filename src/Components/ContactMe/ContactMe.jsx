import "./ContactMe.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

const ContactMe = () => {
  const them = useContext(themeContext);
  const darkMode = them.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_idzv24s",
        "template_jxojnfg",
        form.current,
        "fw2a1Y8BT4ayNOwmv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact">
      <div className="c-left">
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "18rem",
            width: "21rem",
            height: "11rem",
            left: "-5rem",
          }}
        ></div>
        <div className="p-heading">
          <span style={darkMode ? { color: "white" } : { color: "" }}>
            Get in Touch
          </span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="c-right">
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
            top: "3rem",
            width: "21rem",
            height: "11rem",
            left: "1rem",
          }}
        ></div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-contact">
            <input type="text" placeholder="Name" name="user-name" />
            <input type="email" placeholder="Email" name="user-email" />
            <textarea placeholder="Message" name="message"></textarea>
            <button className="button c-btn" type="submit">
              send
            </button>
            <span>{done && "thanks for your message!"}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

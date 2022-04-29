import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className=" n-wrapper">
          <div className="n-left">
            <span className="n-name">Adrev</span>
            <Toggle />
          </div>
          <div className="n-right">
            <div className="n-list">
              <ul>
                <Link
                  spy={true}
                  to="Navbar"
                  smooth={true}
                  activeClass="activeClass"
                >
                  <li>Home</li>
                </Link>
                <Link spy={true} to="Services" smooth={true}>
                  <li>Services</li>
                </Link>
                <Link spy={true} to="Experience" smooth={true}>
                  <li>Experience</li>
                </Link>
                <Link spy={true} to="Protfoilio" smooth={true}>
                  <li>Protfolio</li>
                </Link>
                <Link spy={true} to="Testimonial" smooth={true}>
                  <li>Testimonial</li>
                </Link>
              </ul>
            </div>
            <button className="button n-button">contact us</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

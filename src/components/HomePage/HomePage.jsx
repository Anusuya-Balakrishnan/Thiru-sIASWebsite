import React from "react";
import Homepage from "./HomePage.css";
import logoimage from "./images/Logo.svg";
import { FaList } from "react-icons/fa";
import { FaThreeDot } from "react-icons/fa";

export default function HomePage() {
  return (
    <section id="HomePage">
      <div className="Navbar">
        <div className="NavbarMain">
          <div className="NavbarLogo">
            <img src={logoimage} alt="logo" />
          </div>
          <div className="NavBarContent">
            <p>Home</p>
            <p>Aboutus</p>
            <p>Courses</p>
            <p>Achievement</p>
            <p>Contact</p>
          </div>
          <div className="MenuIcon">
            <FaList />
          </div>
          <div className="MenuList"></div>
        </div>
      </div>
    </section>
  );
}

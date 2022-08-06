import React from "react";
import Homepage from "./HomePage.css";
import logoimage from "./images/Logo.svg";
import { FaList } from "react-icons/fa";
import { FaThreeDot } from "react-icons/fa";

export default function HomePage() {
  return (
    <section id="Navbar">
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
        <div className="MenuIcon" onClick={displayMenu}>
          <FaList />
        </div>
        <div className="MenuListParent">
          <div className="MenuList">
            <p>Home</p>
            <p>Aboutus</p>
            <p>Courses</p>
            <p>Achievement</p>
            <p>Contact</p>
            <p onClick={displayMenu}>*</p>
          </div>
        </div>
      </div>
    </section>
  );
}
let choice = false;
let value;
function displayMenu() {
  if (!choice) {
    value = "block";
    choice = true;
  } else {
    value = "none";
    choice = false;
  }
  // console.log("value", value, "choice", choice);
  document.getElementsByClassName("MenuListParent")[0].style.display = value;
}

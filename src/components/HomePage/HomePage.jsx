import React from "react";
import Homepage from "./HomePage.css";
import logoimage from "./images/Logo.svg";
// import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaThreeDot } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import FirstPageHtml from "../FirstPage/FirstPageHtml";
import SecondPageHtml from "../SecondPage/SecondPageHtml";
export default function HomePage() {
  return (
    <section id="Navbar">
      <div className="NavbarMain">
        <div className="NavbarLogo">
          <img src={logoimage} alt="logo" />
        </div>
        <div className="NavBarContent">
          <p>Home</p>
          <p>About us</p>
          <p>Courses</p>
          <p>Achievement</p>
          <p>Contact</p>
        </div>
        <div className="MenuIcon" onClick={displayMenu}>
          <BiDotsVerticalRounded />
        </div>

        <div className="MenuListParent">
          <div className="MenuList">
            <p>Home</p>
            <p>Aboutus</p>
            <p>Courses</p>
            <p>Achievement</p>
            <p>Contact</p>
            <div className="closeIcon" onClick={closeMenu}>
              <AiOutlineClose />
            </div>
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

function closeMenu() {
  // console.log("close menu");
  document.getElementsByClassName("MenuListParent")[0].style.display = "none";
}

import React from "react";
import Homepage from "./HomePage.css";
import logoimage from "./images/Logo.svg";
// import { Link } from "react-router-dom";
import { BiDotsVerticalRounded, BiChevronDown } from "react-icons/bi";
import { FaThreeDot } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function HomePage() {
  let show = false;
  function showMenu() {
    if (!show) {
      document.querySelector(".navCourseListParent").style.display = "block";
      show = true;
    } else {
      document.querySelector(".navCourseListParent").style.display = "none";
      show = false;
    }
  }
  return (
    <section id="Navbar">
      <Link to="/" className="NavbarMain">
        <div className="NavbarLogo">
          <img src={logoimage} alt="logo" />
        </div>
        <div className="NavBarContent">
          <Link to={"/"} className="navOption">
            Home
          </Link>
          <Link to={"/about"} className="navOption">
            About us
          </Link>
          <div className="navOption" onClick={showMenu}>
            <p>Courses</p>
            <BiChevronDown />
          </div>
          <Link to="/achievement" className="navOption">
            Achievement
          </Link>
          <Link to="" className="navOption">
            Contact
          </Link>
        </div>
        <div className="MenuIcon" onClick={displayMenu}>
          <BiDotsVerticalRounded />
        </div>

        <div className="navCourseListParent">
          <div className="navCourseList">
            <Link to="/course/upsc" className="EachNavCourse">
              UPSC
            </Link>
            <Link to="/course/regionalExam" className="EachNavCourse">
              Regional Exam
            </Link>
            <Link to="/course/spokenEnglish" className="EachNavCourse">
              Spoken English
            </Link>
          </div>
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
      </Link>
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

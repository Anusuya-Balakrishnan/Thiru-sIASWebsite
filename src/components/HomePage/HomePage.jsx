import React, { useState } from "react";
import Homepage from "./HomePage.css";
import logoimage from "./images/Logo.svg";
// import { Link } from "react-router-dom";
import { BiDotsVerticalRounded, BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import whatapp from "./images/whatapp.svg";
import query from "./images/Vector.svg";
import queryHtml from "./queryHtml";
import FooterSubscribe from "../FooterPage/FooterSubscribe/FooterSubscribe";
export default function HomePage() {
  const [isQuery, setIsQuery] = useState(false);
  setInterval(() => {
    setIsQuery(false);
  }, 20000);
  let show = false;
  function showMenu() {
    document.querySelector(".navCourseListParent").style.display = "block";
  }
  function hideMenu() {
    document.querySelector(".navCourseListParent").style.display = "none";
  }
  let courseList = false;
  function displaySideCourse() {
    if (!courseList) {
      document.querySelector(".NSideBarCourseListParent").style.display =
        "block";
      courseList = true;
    } else {
      document.querySelector(".NSideBarCourseListParent").style.display =
        "none";
      courseList = false;
    }
  }
  const newLocal = "navCourseListParent";

  return (
    <section id="Navbar">
      <div className="NavbarMain">
        <Link to={"/"} className="NavbarLogo">
          <img src={logoimage} alt="logo" />
        </Link>
        <div className="NavBarContent">
          <Link to={"/"} className="navOption">
            Home
          </Link>
          <Link to={"/about"} className="navOption">
            About us
          </Link>

          <div
            className="navOption"
            onMouseOver={showMenu}
            onMouseOut={hideMenu}
          >
            <p>Courses</p>
            <BiChevronDown />
          </div>

          <Link to="/achievement" className="navOption">
            Achievement
          </Link>
          <Link to="/contactus" className="navOption">
            Contact
          </Link>
        </div>
        <div className="MenuIcon" onClick={displayMenu}>
          <BiDotsVerticalRounded />
        </div>

        <div className={newLocal}>
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
            <Link to={"/"} className="navOptionSideBar">
              Home
            </Link>
            <Link to={"/about"} className="navOptionSideBar">
              Aboutus
            </Link>
            <div
              className="navOptionSideBar courseMenu "
              onClick={displaySideCourse}
            >
              Courses
            </div>
            <div className="NSideBarCourseListParent">
              <div className="NSideBarCourseList">
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
            <Link to={"/achievement"} className="navOptionSideBar">
              Achievement
            </Link>
            <Link to={"/contactus"} className="navOptionSideBar">
              Contact
            </Link>
            <div className="closeIcon" onClick={closeMenu}>
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <div className="WhatsappIcon">
          <div className="whatsapp">
            <img src={whatapp} />
          </div>
          <div
            className="queryIcon"
            onClick={() => {
              setIsQuery(!isQuery);
            }}
          >
            <img src={query} />
          </div>
        </div>
        <div className="QueryPageMenu">{isQuery && <FooterSubscribe />}</div>
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

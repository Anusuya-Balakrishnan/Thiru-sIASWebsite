import React, { useEffect, useState } from "react";
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
  const [showCourse, setShowCourse] = useState(false);

  if (isQuery) {
    setInterval(() => {
      setIsQuery(false);
    }, 20000);
  }
  function showMenu() {
    setShowCourse(!showCourse);
  }
  let sideMenu = false;
  function displayMenu() {
    if (!sideMenu) {
      document.querySelector(".MenuListParent").style.display = "block";
      sideMenu = true;
    } else {
      document.querySelector(".MenuListParent").style.display = "none";
      sideMenu = false;
    }
  }
  function closeMenu() {
    if (sideMenu) {
      document.querySelector(".MenuListParent").style.display = "none";
      sideMenu = false;
    }
  }

  // window.addEventListener("click", () => {
  //   if (showCourse) {
  //     setShowCourse(!showCourse);
  //   }

  // });
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
          <div>
            <div className="navOption" onMouseOver={showMenu}>
              <p>Courses</p>
              <BiChevronDown />
            </div>
            {/*course list  */}
            <div
              className="navCourseListParent"
              style={{
                display: showCourse ? "block" : "none",
                height: showCourse ? "130px" : "0px",
              }}
            >
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
          {/* side menu list */}
          <div className="MenuListParent">
            <div className="MenuList">
              <Link to={"/"} className="navOptionSideBar">
                Home
              </Link>
              <Link to={"/about"} className="navOptionSideBar">
                Aboutus
              </Link>
              <div
                className="navOptionSideBar"
                id="courseMenu"
                onClick={displaySideCourse}
              >
                Courses
                <BiChevronDown />
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
        </div>

        {/* whatsapp and query icon */}
        <div className="WhatsappIcon">
          <a
            className="whatsapp"
            href="https://wa.me/919715054792"
            target="_blank"
          >
            <img src={whatapp} />
          </a>
          <div
            className="queryIcon"
            onClick={() => {
              setIsQuery(!isQuery);
            }}
          >
            <img src={query} />
          </div>
        </div>

        <div className="QueryPageMenu">
          {isQuery && <FooterSubscribe value="Enter your query" />}
        </div>
      </div>
    </section>
  );
}

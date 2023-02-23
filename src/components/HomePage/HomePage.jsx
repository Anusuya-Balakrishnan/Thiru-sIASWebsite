import React, { useEffect, useRef, useState } from "react";
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
import SideMenu from "./SideMenu";
export default function HomePage() {
  const [isQuery, setIsQuery] = useState(false);
  const [showCourse, setShowCourse] = useState(false);
  const NavbarMainRef = useRef();
  if (isQuery) {
    setInterval(() => {
      setIsQuery(false);
    }, 20000);
  }
  function showMenu() {
    setShowCourse(true);
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
  // function mouseOutDropDown() {
  //   if (showCourse) {
  //     setShowCourse(false);
  //   }
  // }
  function mouseOverDropDown() {
    setShowCourse(true);
  }
  // NavbarMainRef.current.onMouseOut =
  // };
  // .addEventListener("mouseout", () => {

  // });
  window.addEventListener("click", () => {
    if (showCourse) {
      setShowCourse(!showCourse);
    }
  });

  // document
  //   .getElementByClassName("navCourseList")[0]
  //   .addEventListener("mouseout", function () {
  //     document.getElementByClassName("navCourseList")[0].display = "none";
  //   });
  // function dropDown() {
  //   document
  //     .querySelector(".navCourseListParent")
  //     .classList.toggle("navCourseListParent");
  // }
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
            <div
              className="navOption"
              onMouseOver={showMenu}
              // onMouseOut={showMenu}
            >
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
              <div className="navCourseList"
                onMouseOver={mouseOverDropDown}
              >
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
        <div className="MenuIcon">
          <div className="threeIcon_Menu" onClick={displayMenu}>
            <BiDotsVerticalRounded />
          </div>

          <div className="sideMenu__list">
            <SideMenu />
          </div>
          {/* side menu list */}
        </div>

        {/* whatsapp and query icon */}
        <div className="WhatsappIcon">
          <a
            className="whatsapp"
            href="https://wa.me/919489645465"
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

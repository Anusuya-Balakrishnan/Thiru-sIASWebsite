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
// import SideMenu from "./SideMenu";


export default function HomePage() {
  const [isQuery, setIsQuery] = useState(false);
  const [showCourse, setShowCourse] = useState(true);
  const NavbarMainRef = useRef();
  if (isQuery) {
    setInterval(() => {
      setIsQuery(false);
    }, 20000);
  }
  function showMenu() {
    setShowCourse(!showCourse);
  }
  // let sideMenu = false;
  // function displayMenu() {
  //   if (!sideMenu) {
  //     document.querySelector(".MenuListParent").style.display = "block";
  //     sideMenu = true;
  //   } else {
  //     document.querySelector(".MenuListParent").style.display = "none";
  //     sideMenu = false;
  //   }
  // }
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



// side menu functions
  
  const [sideCourse, setSideCourse] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  function displaySideCourse() {
    setSideCourse(!sideCourse);
    console.log(sideCourse);
  }
  function displaySideMenu() {
    setSideMenu(!sideMenu);
    if (sideMenu) {
    }
    console.log(sideMenu);
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
            <div
              className="navOption courseListMenu"
              // onMouseOver={showMenu}
              // onMouseOut={showMenu}
            >
              <p>Courses  <span style={{marginLeft: "3px"
              }}> </span><BiChevronDown /></p>
              
               {/*course list  */}
              <ul className="navCourseListParent"
                // onClick={showMenu}
              // style={{
              //   display: showCourse ? "block" : "none",
              //   height: showCourse ? "130px" : "0px",
              // }}
            >
              {/* <div className="navCourseList"
                // onMouseOver={mouseOverDropDown}
              > */}
              <li><Link to="/course/upsc" className="EachNavCourse">
                  UPSC
                </Link> </li>
                <li><Link to="/course/regionalExam" className="EachNavCourse">
                  Regional Exam
                </Link> </li>
                <li><Link to="/course/spokenEnglish" className="EachNavCourse">
                  Spoken English
                </Link> </li>
                
              {/* </div> */}
            </ul>
            </div>
           
          </div>

          <Link to="/achievement" className="navOption">
            Achievement
          </Link>
          <Link to="/contactus" className="navOption">
            Contact
          </Link>
        </div>

        
        {/* menuicon */}
        <div className="MenuIcon">
          <div className="threeIcon_Menu"
            onClick={displaySideMenu}
          >
            <BiDotsVerticalRounded />
          </div>

          

          <div className="sideMenu__list">
           {/* side menu list */} 
             <section id="SideMenu">
              <div className="MenuListParent"
                // style={{
                //   display: sideMenu ? "block" : "none"
                // }}
              >
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
            <div className="NSideBarCourseListParent" style={ {display:sideCourse ? "block" : "none"}}>
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
          <Link to={"/contactus"} className="navOptionSideBar" >
            Contact
          </Link>
          {/* <div className="closeIcon" onClick={displaySideMenu}>
            <AiOutlineClose />
          </div> */}
        </div>
              </div>
            </section>
          </div>
          
        </div>

        


        {/* whatsapp and query icon */}
        <div className="WhatsappIcon">
          <a
            className="whatsapp"
            href="https://wa.me/918637670992"
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

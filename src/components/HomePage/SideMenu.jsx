import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./HomePage";



export default function SideMenu() {
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
  const [closesideMenu, setCloseSideMenu] = useState(false);
  function displaySideMenu() {
    if (!closesideMenu) {
      document.getElementsByClassName("MenuListParent")[0].style.display =
        "display";
      setCloseSideMenu(true);
    } else {
      document.getElementsByClassName("MenuListParent")[0].style.display =
        "none";
      setCloseSideMenu(false);
    }
  }


 
  return (
    <section id="SideMenu">
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
          <div className="closeIcon" onClick={displaySideMenu}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </section>
  );
}

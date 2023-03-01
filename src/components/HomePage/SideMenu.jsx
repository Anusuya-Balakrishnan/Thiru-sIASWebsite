import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./HomePage";



export default function SideMenu() {
  const [sideCourse, setSideCourse] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  function displaySideCourse() {
    setSideCourse(!sideCourse);
    console.log(sideCourse);
  }
  function displaySideMenu() {
    setSideMenu(!sideMenu);
   
    console.log(sideMenu);
  }

  return (
    <section id="SideMenu">
      <div className="MenuListParent" style={{
        display: sideMenu ?"block":"none" 
      }} >
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
          <div className="closeIcon" onClick={displaySideMenu}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </section>
  );
}

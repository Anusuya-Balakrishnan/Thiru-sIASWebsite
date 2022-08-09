import React, { useState } from "react";
import CourseSlideStyle from "./CourseSlideStyle.css";
import CourseHtml from "../Course/CourseHtml";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

export default function CourseSlideHtml() {
  const [widthValue, setWidth] = useState(0);
  function leftMove() {
    let x = document.querySelector(".slide").clientWidth;
    let maxWidth = document.querySelector(".SlideContainers").clientWidth;
    // console.log(maxWidth);
    if (widthValue < maxWidth - x) {
      setWidth(widthValue + x);
    } else {
      // document.querySelector(".CourseLeftClick").style.display = "none";
      setWidth(0);
    }
    document.querySelector(".SlideContainers").style.left = -widthValue + "px";
  }
  function RightMove() {
    let x = document.querySelector(".slide").clientWidth;
    let maxWidth = document.querySelector(".SlideContainers").clientWidth;
    let leftvalue = document.querySelector(".SlideContainers").style.left;
    if (leftvalue != 0) {
      setWidth(leftvalue + x);
    } else {
      // document.querySelector(".CourseLeftClick").style.display = "none";
      // setWidth(0);
    }
    document.querySelector(".SlideContainers").style.left = widthValue + "px";
    console.log(widthValue + "leftvalue");
  }

  return (
    <section id="CourseSlidePage">
      <div className="CourseSlide">
        <div className="CourseLeftClick" onClick={leftMove}>
          <CgChevronLeft />
        </div>
        <div className="CourseSlideMain">
          <div className="SlideContainers">
            <div className="slide">
              <CourseHtml />
            </div>
            <div className="slide">
              <CourseHtml />
            </div>
            <div className="slide">
              <CourseHtml />
            </div>
            <div className="slide">
              <CourseHtml />
            </div>
            <div className="slide">
              <CourseHtml />
            </div>
            <div className="slide">
              <CourseHtml />
            </div>
          </div>
        </div>
        <div className="CourseRightClick" onClick={RightMove}>
          <CgChevronRight />
        </div>
      </div>
    </section>
  );
}

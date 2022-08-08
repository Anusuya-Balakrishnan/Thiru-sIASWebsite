import React, { useState } from "react";
import CourseSlideStyle from "./CourseSlideStyle.css";
import CourseHtml from "../Course/CourseHtml";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function CourseSlideHtml() {
  const [widthValue, setWidth] = useState(0);
  function leftMove() {
    let x = document.querySelector(".slide").clientWidth;
    let maxWidth = document.querySelector(".SlideContainers").clientWidth;
    // console.log(maxWidth);
    if (widthValue < maxWidth - 2(x)) {
      setWidth(widthValue + x);
      console.log(widthValue);
    }
    //  else {
    //   // document.querySelector(".CourseLeftClick").style.display = "none";
    //   setWidth(0);
    // }
    document.querySelector(".SlideContainers").style.left = -widthValue + "px";
  }
  function RightMove() {
    let x = document.querySelector(".slide").clientWidth;
    let maxWidth = document.querySelector(".SlideContainers").clientWidth;

    if (widthValue != 0) {
      setWidth(widthValue + x);
      console.log(widthValue);
    } else {
      setWidth(0);
    }
    // else {
    //   // document.querySelector(".CourseRightClick").style.display = "none";
    //   setWidth(maxWidth);
    // }
    document.querySelector(".SlideContainers").style.right = -widthValue + "px";
    console.log("right value " + widthValue);
  }

  return (
    <section id="CourseSlidePage">
      <div className="CourseSlide">
        <div className="CourseLeftClick" onClick={leftMove}>
          <FaLessThan />
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
          <FaGreaterThan />
        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from "react";
import CourseSlideStyle from "./CourseSlideStyle.css";
import CourseHtml from "../Course/CourseHtml.jsx";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import omr1 from "./image/omrSheet.jpg";
import mainEssay from "./image/mainEssay.jpg";
import OptionalCourse from "../Course/OptionalCourse";
import SpokenEnglishCourse from "../Course/SpokenEnglishCourse";
import preliminaryMains from "./image/preliminaryMains.jpg";
import preCrash from "./image/preCrash.jpeg";
import aptitude from "./image/aptitude.png";
import tnpsc from "./image/tnpsc.jpg";
import RRB from "./image/RRB.jpg";
import udc from "./image/udc.jpg";
// import optional from "./image/political-sociology-logo.jpg";
import groupDiscussion from "./image/groupDiscussion.jpg";
import intermediate from "./image/intermediate.png";
import beginner from "./image/beginner.jpg";
import number from "./image/numberImage.jpg";
import optional from "./image/optional.jpg";
export default function CourseSlideHtml() {
  let optionalCourse = [
    {
      image: optional,
      title: "Optional",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      optional1: "Socialogy",
      optional2: "Politicalscience",
    },
  ];
  let englishCourse = [
    {
      image: beginner,
      title: "Beginner Level",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "40",
    },
    {
      image: intermediate,
      title: "Intermediate Level",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "60",
    },
    {
      image: groupDiscussion,
      title: "Advance Level",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "80",
    },
  ];
  let courseContent = [
    {
      image: omr1,
      title: "Preliminary Exam Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "8",
      test: "80",
    },
    {
      image: mainEssay,
      title: "Mains Exam Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "10",
      test: "50",
    },
    {
      image: preliminaryMains,
      title: "Preliminary Cum Mains Exam Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "8",
      test: "80",
    },
    {
      image: preCrash,
      title: "Preliminary Crash Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "6",
      test: "40",
    },
    {
      image: number,
      title: "CSAT",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "4",
      test: "60",
    },

    {
      image: tnpsc,
      title: "TNPSC Group1 Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "8",
      test: "50",
    },
    {
      image: tnpsc,
      title: "TNPSC Group2 Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "8",
      test: "80",
    },
    {
      image: RRB,
      title: "RRB/SSC Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "8",
      test: "40",
    },
    {
      image: udc,
      title: "UDC & LDC Course",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      month: "6",
      test: "25",
    },
  ];

  const [leftValue, setLeftValue] = useState(null);
  let CourseSlideContainersRef = useRef(null);
  let CourseSlideMainRef = useRef(null);

  // left click function
  function leftClick() {
    let EachslideWidth = document.querySelector(".slide").clientWidth;
    let totalWidth = document.querySelector(
      ".CourseSlideContainers"
    ).clientWidth;
    let totalWidthValue = totalWidth - EachslideWidth * 3;
    if (Math.abs(leftValue) < totalWidthValue) {
      setLeftValue(leftValue - EachslideWidth);
    } else {
      setLeftValue(0);
    }
    totalWidth.style.transition = "0.5s";
  }

  // right Click function
  function rightClick() {
    let EachslideWidth = document.querySelector(".slide").clientWidth;
    let totalWidth = document.querySelector(
      ".CourseSlideContainers"
    ).clientWidth;
    let totalWidthValue = totalWidth - EachslideWidth * 3;

    if (leftValue < 0 && leftValue >= -totalWidthValue) {
      setLeftValue(leftValue + EachslideWidth);
    } else {
      setLeftValue(-totalWidthValue);
    }
  }

  let slider = CourseSlideMainRef;
  let innerSlider = CourseSlideContainersRef;
  let pressed = false;
  let startx;
  let x;

  function mouseDown(e) {
    pressed = true;
    startx = e.nativeEvent.offsetX - innerSlider.current.offsetLeft;
    CourseSlideMainRef.current.style.cursor = "grabbing";
  }
  function mouseUp() {
    CourseSlideMainRef.current.style.cursor = "grab";
  }
  useEffect(() => {
    window.addEventListener("mouseup", () => {
      pressed = false;
      CourseSlideMainRef.current.style.cursor = "grab";
    });
  });
  function mouseMove(e) {
    if (!pressed) return;
    e.preventDefault();
    x = e.nativeEvent.offsetX;
    innerSlider.current.style.left = `${x - startx}px`;
    checkedBorder();
  }
  function checkedBorder() {
    let outer = slider.current.getBoundingClientRect();
    let inner = innerSlider.current.getBoundingClientRect();
    if (parseInt(innerSlider.current.style.left) > 0) {
      innerSlider.current.style.left = "0px";
    } else if (inner.right < outer.right) {
      innerSlider.current.style.left = `-${inner.width - outer.width}px`;
    }
  }

  return (
    <section id="CourseSlidePage">
      <div className="CourseSlide">
        <div className="CourseLeftClick" onClick={leftClick}>
          <CgChevronLeft />
        </div>
        <div
          ref={CourseSlideMainRef}
          className="CourseSlideMain"
          onMouseDown={(e) => {
            mouseDown(e);
          }}
          onMouseUp={mouseUp}
          onMouseMove={(e) => {
            mouseMove(e);
          }}
        >
          <div
            className="CourseSlideContainers"
            ref={CourseSlideContainersRef}
            style={{ left: leftValue + "px" }}
          >
            {courseContent.map((Eachcourse, index) => {
              return (
                <div key={index} className="slide">
                  <CourseHtml
                    courseImage={Eachcourse.image}
                    courseTitle={Eachcourse.title}
                    courseContent={Eachcourse.content}
                    month={Eachcourse.month}
                    test={Eachcourse.test}
                  />
                </div>
              );
            })}
            {optionalCourse.map((Eachcourse, index) => {
              return (
                <div key={index} className="slide">
                  <OptionalCourse
                    courseImage={Eachcourse.image}
                    courseTitle={Eachcourse.title}
                    courseContent={Eachcourse.content}
                    optional1={Eachcourse.optional1}
                    optional2={Eachcourse.optional2}
                  />
                </div>
              );
            })}
            {englishCourse.map((Eachcourse, index) => {
              return (
                <div key={index} className="slide">
                  <SpokenEnglishCourse
                    courseImage={Eachcourse.image}
                    courseTitle={Eachcourse.title}
                    courseContent={Eachcourse.content}
                    month={Eachcourse.month}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="CourseRightClick" onClick={rightClick}>
          <CgChevronRight />
        </div>
      </div>
      {/* <button
      // onClick={() => {
      //   const text = document.querySelector(".CourseSlideMain");
      //   console.log(text.getBoundingClientRect());
      //   console.log(CourseSlideContainersRef.current.getBoundingClientRect());
      // }}
      >
        click
      </button> */}
    </section>
  );
}

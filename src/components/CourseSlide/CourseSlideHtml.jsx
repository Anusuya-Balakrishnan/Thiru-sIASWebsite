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
import sociology from "./image/political-sociology-logo.jpg";
import groupDiscussion from "./image/groupDiscussion.jpg";
import intermediate from "./image/intermediate.png";
import beginner from "./image/beginner.jpg";
import number from "./image/numberImage.jpg";
import optional from "./image/optional.jpg";

export default function CourseSlideHtml() {
  let regionalCourse = [
    {
      image: tnpsc,
      title: "TNPSC Group1 Course",
      content:
        "An examination conducted by Tamilnadu state government for the post of deputy collector, deputy superintendent of police, assistant commissioner,etc. We provide coaching for both prelims and finals",
      month: "8",
      test: "50",
      path: "TNPSCGROUP1",
    },
    {
      image: tnpsc,
      title: "TNPSC Group2 Course",
      content:
        "Tamilnadu state government examination for assistance registrar, deputy tahsildar, sub-registrar, etc",
      month: "8",
      test: "80",
      path: "TNPSCGROUP2",
    },
    {
      image: RRB,
      title: "RRB/SSC Course",
      content:
        "Staff selection commission conducts the examination for various post throughout the year. We provide you coaching for both prelims and mains level ",
      month: "8",
      test: "40",
      path: "RRB_SSC",
    },
    {
      image: udc,
      title: "UDC & LDC Course",
      content:
        "Candidates who wishes to work in our own hometown it is your opportunity to study at affordable price.",
      month: "6",
      test: "25",
      path: "UDC_LDC",
    },
    {
      image: sociology,
      title: "Banking",
      content:
        "Evergreen optional to improve your score. Why do you need to go out of town for PSIR Optional. Learn from the best from your hometown.",
      month: "6",
      test: "100",
      path: "BANKING",
    },
  ];
  let englishCourse = [
    {
      image: beginner,
      title: "Beginner Level",
      content:
        " Basic English pronunciation, simple paragraph writing, Basic English grammar, 25 audio files for listening",
      month: "40",
      path: "ENGBEG",
    },
    {
      image: intermediate,
      title: "Intermediate Level",
      content:
        "Advanced English pronunciation, Full English grammar, 35 audio files for listening including short stories",
      month: "60",
      path: "ENGINT",
    },
    {
      image: groupDiscussion,
      title: "Advance Level",
      content:
        "for placement, for stage speaking, for interview, for teaching profesionals",
      month: "80",
      path: "ENGAND",
    },
  ];
  let upscCourse = [
    {
      image: omr1,
      title: "Preliminary Exam Course",
      content:
        "Detailed coaching for UPSC preliminary examination from the basics which includes test series",
      month: "8",
      test: "80",
      path: "PREUPSC",
    },
    {
      image: mainEssay,
      title: "Mains Exam Course",
      content:
        "Cleared preliminary level now it's time to explore mains. Need only mains topic then this course is for you.",
      month: "10",
      test: "50",
      path: "MAINS",
    },
    {
      image: preliminaryMains,
      title: "Preliminary Cum Mains Exam Course",
      content:
        "We provide coaching for both preliminary level and mains level. Classes in both online and offline mode.",
      month: "8",
      test: "80",
      path: "PREMAINS",
    },
    {
      image: preCrash,
      title: "Preliminary Crash Course",
      content:
        "A 4 month course and 2 months test series to revise your portions and boost your confidence.",
      month: "6",
      test: "40",
      path: "PRECRASH",
    },
    {
      image: number,
      title: "CSAT",
      content:
        "Clear your qualifying paper like a Pro choose our only CSAT course at the most affordable price",
      month: "4",
      test: "60",
      path: "CSAT",
    },
  ];

  let upscOptionalCourse = [
    {
      image: sociology,
      title: "Optional",
      content:
        "Evergreen optional to improve your score. Why do you need to go out of town for PSIR Optional. Learn from the best from your hometown.",
      optional1: "Socialogy",
      optional2: "Politicalscience",
      path: "OPTIONAL",
    },
    {
      image: sociology,
      title: "Other Courses",
      content:
        "Evergreen optional to improve your score. Why do you need to go out of town for PSIR Optional. Learn from the best from your hometown.",
      optional1: "CUET",
      optional2: "CAT",
      path: "CUETCAT",
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

  // let slider = CourseSlideMainRef;
  // let innerSlider = CourseSlideContainersRef;
  // let pressed = false;
  // let startx;
  // let x;

  // function mouseDown(e) {
  //   pressed = true;
  //   startx = e.nativeEvent.offsetX - innerSlider.current.offsetLeft;
  //   CourseSlideMainRef.current.style.cursor = "grabbing";
  // }
  // function mouseUp() {
  //   CourseSlideMainRef.current.style.cursor = "grab";
  // }
  // useEffect(() => {
  //   window.addEventListener("mouseup", () => {
  //     pressed = false;
  //     CourseSlideMainRef.current.style.cursor = "grab";
  //   });
  // });
  // function mouseMove(e) {
  //   if (!pressed) return;
  //   e.preventDefault();
  //   x = e.nativeEvent.offsetX;
  //   innerSlider.current.style.left = `${x - startx}px`;
  //   checkedBorder();
  // }
  // function checkedBorder() {
  //   let outer = slider.current.getBoundingClientRect();
  //   let inner = innerSlider.current.getBoundingClientRect();
  //   if (parseInt(innerSlider.current.style.left) > 0) {
  //     innerSlider.current.style.left = "0px";
  //   } else if (inner.right < outer.right) {
  //     innerSlider.current.style.left = `-${inner.width - outer.width}px`;
  //   }
  // }

  return (
    <section id="CourseSlidePage">
      <div className="CourseSlide">
        <div className="CourseLeftClick" onClick={leftClick}>
          <CgChevronLeft />
        </div>
        <div
          ref={CourseSlideMainRef}
          className="CourseSlideMain"
          // onMouseDown={(e) => {
          //   mouseDown(e);
          // }}
          // onMouseUp={mouseUp}
          // onMouseMove={(e) => {
          //   mouseMove(e);
          // }}
        >
          <div
            className="CourseSlideContainers"
            ref={CourseSlideContainersRef}
            style={{ left: leftValue + "px" }}
          >
            {upscCourse.map((Eachcourse, index) => {
              return (
                <div key={index} className="slide">
                  <CourseHtml
                    courseImage={Eachcourse.image}
                    courseTitle={Eachcourse.title}
                    courseContent={Eachcourse.content}
                    month={Eachcourse.month}
                    test={Eachcourse.test}
                    path={Eachcourse.path}
                  />
                </div>
              );
            })}
            {upscOptionalCourse.map((Eachcourse, index) => {
              return (
                <div key={index} className="slide">
                  <OptionalCourse
                    courseImage={Eachcourse.image}
                    courseTitle={Eachcourse.title}
                    courseContent={Eachcourse.content}
                    optional1={Eachcourse.optional1}
                    optional2={Eachcourse.optional2}
                    path={Eachcourse.path}
                  />
                </div>
              );
            })}
            {regionalCourse.map((Eachcourse, index) => {
              return (
                <div key={index} className="slide">
                  <CourseHtml
                    courseImage={Eachcourse.image}
                    courseTitle={Eachcourse.title}
                    courseContent={Eachcourse.content}
                    month={Eachcourse.month}
                    test={Eachcourse.test}
                    path={Eachcourse.path}
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
                    path={Eachcourse.path}
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

import React from "react";
import RegionalStyle from "./RegionalStyle.css";
import tnpsc from "./image/tnpsc.jpg";
import RRB from "./image/RRB.jpg";
import udc from "./image/udc.jpg";
import CourseHtml from "../../Course/CourseHtml";

export default function RegionalHtml() {
  let courseContent = [
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
  return (
    <section id="RegionalCoursePage">
      <div className="RegionalCourseParent">
        <div className="RegionalCourseTitle">Regional Exam Courses</div>
        <div className="RegionalCourse">
          {courseContent.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="RegionalEachCourse">
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
        </div>
      </div>
    </section>
  );
}

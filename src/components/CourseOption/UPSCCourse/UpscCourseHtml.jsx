import React from "react";
import UpscStyle from "./UpscStyle.css";
import CourseHtml from "../../Course/CourseHtml";
import omr1 from "./image/omrSheet.jpg";
import mainEssay from "./image/mainEssay.jpg";
import preliminaryMains from "./image/preliminaryMains.jpg";
import preCrash from "./image/preCrash.jpeg";
import aptitude from "./image/aptitude.png";
import optional from "./image/political-sociology-logo.jpg";
import number from "./image/numberImage.jpg";
import OptionalCourse from "../../Course/OptionalCourse";
import sociology from "./image/sociology.png";
export default function UpscCourseHtml() {
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
  ];
  let optionalCourse = [
    {
      image: sociology,
      title: "Optional",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum" +
        "rhoncus in eget lectus quis consectetur facilisis. Egestas posuere" +
        "nunc donec ultricies egestas vitae id in.",
      optional1: "Socialogy",
      optional2: "Politicalscience",
    },
  ];
  return (
    <section id="UpscCoursePage">
      <div className="UpscMainParent">
        <div className="UpscTitle">UPSC Courses:</div>
        <div className="UpscCourseParent">
          {courseContent.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="UpscEachCourse">
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
          {optionalCourse.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="UpscEachCourse">
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
        </div>
      </div>
    </section>
  );
}

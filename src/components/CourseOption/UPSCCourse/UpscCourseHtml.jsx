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
  ];
  return (
    <section id="UpscCoursePage">
      <div className="UpscMainParent">
        <div className="UpscTitle">UPSC Courses:</div>
        <div className="UpscCourseParent">
          {upscCourse.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="UpscEachCourse">
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
          {upscOptionalCourse.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="UpscEachCourse">
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
        </div>
      </div>
    </section>
  );
}

import React from "react";
import SpokenEnglishStyle from "./SpokenEnglishStyle.css";
import groupDiscussion from "./image/groupDiscussion.jpg";
import intermediate from "./image/intermediate.png";
import beginner from "./image/beginner.jpg";
import SpokenEnglishCourse from "../../Course/SpokenEnglishCourse";
export default function SpokenEnglishHtml() {
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
  return (
    <section id="SpokenEnglishHtmlPage">
      <div className="SpokenEnglishPageParent">
        <div className="SPTitle">Spoken English Courses</div>
        <div className="SPCourses">
          {englishCourse.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="SPEachCourse">
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
    </section>
  );
}

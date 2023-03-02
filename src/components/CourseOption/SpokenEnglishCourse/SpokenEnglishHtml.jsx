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
        "Features - Basic learning skills, Basic grammar,Group discussion, sentence formation.",
      month: "3",
      path: "ENGBEG",
    },
    {
      image: intermediate,
      title: "Intermediate Level",
      content:
        "Features - Advanced speaking skills, vocabulary, and advanced grammar to boost up your confidence",
      month: "4",
      path: "ENGINT",
    },
    {
      image: groupDiscussion,
      title: "Advance Level",
      content:
        "Features - for stage speaking, placement interview, public speaking, management purposes also",
      month: "2",
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

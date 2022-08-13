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
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

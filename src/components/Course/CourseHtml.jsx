import React from "react";
import CourseStyle from "./CourseStyle.css";
import image from "./image/image.jpeg";

export default function Course() {
  return (
    <section id="CourseHtml">
      <div className="CourseParent">
        <div className="CourseImage">
          <img src={image} alt="courseImage" />
        </div>
        <div className="CourseDetails">
          <p className="CourseTitle">Preliminary Exam Course</p>
          <p className="CourseContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
            rhoncus in eget lectus quis consectetur facilisis. Egestas posuere
            nunc donec ultricies egestas vitae id in.
          </p>
          <div className="courseDuration"></div>
        </div>
      </div>
    </section>
  );
}

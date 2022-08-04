import React from "react";
import CourseStyle from "./CourseStyle.css";
import image from "./image/image.jpeg";
import { IoTime } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import Button from "../Button/ButtonHtml";
export default function Course() {
  return (
    <section id="CourseHtml">
      <div className="CourseParent">
        <img src={image} alt="courseImage" />
        <div className="CourseDetails">
          <p className="CourseTitle">Preliminary Exam Course</p>
          <p className="CourseContent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum
            rhoncus in eget lectus quis consectetur facilisis. Egestas posuere
            nunc donec ultricies egestas vitae id in.
          </p>
          <div className="courseDuration">
            <div className="duration">
              <IoTime />
              <p>8 Months</p>
            </div>
            <div className="duration">
              <MdEventNote />
              <p>80 Tests</p>
            </div>
          </div>
        </div>
        <Button />
      </div>
    </section>
  );
}

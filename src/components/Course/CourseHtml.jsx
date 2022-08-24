import React from "react";
import CourseStyle from "./CourseStyle.css";
import image from "./image/image.jpeg";
import { IoTime } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import Button from "../Button/ButtonHtml";
import LargeButton from "../Button/LargeButton/LargeButton";
export default function CourseHtml(props) {
  return (
    <section id="CourseHtml">
      <div className="CourseParent">
        <img src={props.courseImage} alt="courseImage" />
        <div className="CoursePart2">
          <div className="CourseDetails">
            <p className="CourseTitle">{props.courseTitle}</p>
            <p className="CourseContent">{props.courseContent}</p>
            <div className="courseDuration">
              <div className="duration">
                <IoTime />
                <p>{props.month} Months</p>
              </div>
              <div className="duration">
                <MdEventNote />
                <p>{props.test} Tests</p>
              </div>
            </div>
          </div>
          <div className="ButtonComponent">
            <LargeButton value="For More" />
          </div>
        </div>
      </div>
    </section>
  );
}

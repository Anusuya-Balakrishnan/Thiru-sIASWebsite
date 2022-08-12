import React from "react";
import CourseStyle from "./CourseStyle.css";
import image from "./image/image.jpeg";
import { AiFillStar } from "react-icons/ai";
import { IoTime } from "react-icons/io5";

import Button from "../Button/ButtonHtml";
export default function SpokenEnglishCourse(props) {
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
                <p>{props.month} Hours</p>
              </div>
            </div>
          </div>
          <div className="ButtonDiv">
            <Button name="For More" />
          </div>
        </div>
      </div>
    </section>
  );
}

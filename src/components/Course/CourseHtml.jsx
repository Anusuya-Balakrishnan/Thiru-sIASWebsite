import React from "react";
import CourseStyle from "./CourseStyle.css";
import image from "./image/image.jpeg";
import { IoTime } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";
import Button from "../Button/ButtonHtml";
import { Link, useNavigate } from "react-router-dom";
import LargeButton from "../Button/LargeButton/LargeButton";
export default function CourseHtml(props) {
  const navigate = useNavigate();
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
          <div
            className="ButtonComponent"
            onClick={function () {
              navigate(`/syllabus/${props.path}`);
            }}
          >
            <LargeButton value="For More" />
          </div>
        </div>
      </div>
    </section>
  );
}

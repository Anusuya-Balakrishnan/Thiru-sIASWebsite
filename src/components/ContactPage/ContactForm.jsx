import { ReactDOM, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import Logo from "./images/Logo.svg";
import course from "./images/course.svg";
import query from "./images/query.svg";
import LogoOnly from "./images/logoOnly.svg";
import contactFormStyle from "./contactFormStyle.css";
import LargeButton from "../Button/LargeButton/LargeButton";

let courseList = [
  "Preliminary Exam",
  "Mains Exam",
  "Preliminary cums Mains Exam",
  "Preliminary Exam(Crash Course)",
  "CSAT",
  "Socialogy(Optional)",
  "Political Science(Optional)",
  "TNPSC Group 1",
  "TNPSC Group 2",
  "RRB/SSC",
  "UDC/LDC",
  "Spoken English",
];

export default function ContactForm() {
  const [isshow, setshow] = useState(false);
  function showCourses() {
    if (!isshow) {
      document.querySelector(".Options").style.display = "block";
      setshow(true);
    } else {
      document.querySelector(".Options").style.display = "none";
      setshow(false);
    }
  }
  return (
    <section id="ContactForm">
      <div className="ContactFormContainer">
        <div className="ContactFormTitle">Contact Form</div>
        <div className="ContactContainer">
          <div className="FormElement">
            <div className="Icon">
              <BsFillPersonFill />
            </div>
            <input
              type="text"
              className="InputType"
              name="Name"
              placeholder="Name"
            />
          </div>
          <div className="FormElement">
            <div className="Icon">
              <MdEmail />
            </div>
            <input
              type="email"
              className="InputType"
              name="Email"
              placeholder="Email"
            />
          </div>
          <div className="FormElement">
            <div className="Icon">
              <MdPhone />
            </div>
            <input
              type="tel"
              className="InputType"
              name="PhoneNumber"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>
          <div className="SelectList" onClick={showCourses}>
            <div className="CourseMenu FormElement">
              <img src={course} className="Icon" />
              <div className="popupCourseTitle">Select Courses</div>
              <BsChevronDown color="#27227A" />
            </div>
            <div className="Options">
              {courseList.map((course) => {
                return (
                  <div className="option" key={course.id}>
                    {course}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="FormElement">
            <img src={query} className="Icon" />
            <input
              type="text"
              className="InputType"
              name="Query"
              placeholder="Query"
            />
          </div>
        </div>
        <LargeButton value="Submit" />
      </div>
    </section>
  );
}

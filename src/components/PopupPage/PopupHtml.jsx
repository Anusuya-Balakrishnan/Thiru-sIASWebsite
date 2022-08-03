import { ReactDOM } from "react";
import { PopupStyle } from "./PopupStyle.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import Logo from "./images/Logo.svg";
import course from "./images/course.svg";
import query from "./images/query.svg";
let menuClick = true;
let courseList = [
  "Preliminary Exam",
  "Mains Exam",
  "Preliminary cums Mains Exam",
  "Preliminary Exam(Crash Course)",
  // "CSAT",
  // "Socialogy(Optional)",
  // "Political Science(Optional)",
  // "TNPSC Group 1",
  // "TNPSC Group 2",
  // "RRB/SSC",
  // "UDC/LDC",
  // "Spoken English",
];

export default function PopupPage() {
  return (
    <section id="PopupPage">
      <div className="PopupPageParent">
        <div className="PopupPageMain">
          <div className="Heading">
            <div className="HeadingImage">
              <img src={Logo} alt="LogoImage" />
              {/* <AiOutlineClose /> */}
            </div>
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
            <div className="SelectList">
              <div className="CourseMenu FormElement">
                <img src={course} className="Icon" />
                <div className="CourseTitle">Select Courses</div>
                <BsChevronDown color="#27227A" />
              </div>
              {/* <div className="Options">
                {courseList.map((course) => {
                  return (
                    <div className="option" key={course.id}>
                      {course}
                    </div>
                  );
                })}
              </div> */}
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
        </div>
      </div>
    </section>
  );
}

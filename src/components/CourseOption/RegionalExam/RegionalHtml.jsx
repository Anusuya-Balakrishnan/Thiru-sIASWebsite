import React from "react";
import RegionalStyle from "./RegionalStyle.css";
import tnpsc from "./image/tnpsc.jpg";
import RRB from "./image/RRB.jpg";
import udc from "./image/udc.jpg";
import CourseHtml from "../../Course/CourseHtml";

export default function RegionalHtml() {
  let regionalCourse = [
    {
      image: tnpsc,
      title: "TNPSC Group1 Course",
      content:
        "An examination conducted by Tamilnadu state government for the post of deputy collector, deputy superintendent of police, assistant commissioner,etc. We provide coaching for both prelims and finals",
      month: "8",
      test: "50",
      path: "TNPSCGROUP1",
    },
    {
      image: tnpsc,
      title: "TNPSC Group2 Course",
      content:
        "Tamilnadu state government examination for assistance registrar, deputy tahsildar, sub-registrar, etc",
      month: "8",
      test: "80",
      path: "TNPSCGROUP2",
    },
    {
      image: RRB,
      title: "RRB/SSC Course",
      content:
        "Staff selection commission conducts the examination for various post throughout the year. We provide you coaching for both prelims and mains level ",
      month: "8",
      test: "40",
      path: "RRB_SSC",
    },
    {
      image: udc,
      title: "UDC & LDC Course",
      content:
        "Candidates who wishes to work in our own hometown it is your opportunity to study at affordable price.",
      month: "6",
      test: "25",
      path: "UDC_LDC",
    },
    {
      image: udc,
      title: "Banking Exam",
      content:
        "Candidates who wishes to work in our own hometown it is your opportunity to study at affordable price.",
      month: "6",
      test: "100",
      path: "BANKING",
    },
    {
      image: udc,
      title: "Other Courses",
      content:
        "Evergreen optional to improve your score. Why do you need to go out of town for PSIR Optional. Learn from the best from your hometown.",
      optional1: "CUET",
      optional2: "CAT",
      path: "CUETCAT",
    },
  ];
  return (
    <section id="RegionalCoursePage">
      <div className="RegionalCourseParent">
        <div className="RegionalCourseTitle">Regional Exam Courses</div>
        <div className="RegionalCourse">
          {regionalCourse.map((Eachcourse) => {
            return (
              <div key={Eachcourse.id} className="RegionalEachCourse">
                <CourseHtml
                  courseImage={Eachcourse.image}
                  courseTitle={Eachcourse.title}
                  courseContent={Eachcourse.content}
                  month={Eachcourse.month}
                  test={Eachcourse.test}
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

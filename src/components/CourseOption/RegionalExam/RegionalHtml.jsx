import React from "react";
import RegionalStyle from "./RegionalStyle.css";
import tnpsc from "./image/tnpsc.jpg";
import RRB from "./image/RRB.jpg";
import udc from "./image/udc.jpg";
import cuet from "./image/cuet.jpeg";
import CourseHtml from "../../Course/CourseHtml";

export default function RegionalHtml() {
   let regionalCourse = [
    {
      image: tnpsc,
      title: "TNPSC Group1 Course",
      content:
        "Tamilnadu state government examination for deputy collector, deputy superintendent of police, assistant commissioner,etc. We provide coaching for both prelims and finals.",
      month: "6",
      test: "75",
      path: "TNPSCGROUP1",
    },
    {
      image: tnpsc,
      title: "TNPSC Group2 Course",
      content:
        "Tamilnadu state government examination for assistance registrar, deputy tahsildar, sub-registrar, etc",
      month: "6",
      test: "75",
      path: "TNPSCGROUP2",
    },
    {
      image: RRB,
      title: "RRB/SSC Course",
      content:
        "Staff selection commission conducts the examination for various post throughout the year. We provide you coaching for both prelims and mains level ",
      month: "6",
      test: "75",
      path: "RRB_SSC",
    },
    {
      image: udc,
      title: "UDC & LDC Course",
      content:
        "Candidates who wishes to work in our own hometown it is your opportunity to study at affordable price.",
      month: "6",
      test: "75",
      path: "UDC_LDC",
    },
    {
      image: udc,
      title: "Banking Exam",
      content:
        "Candidates who wishes to work in our own hometown it is your opportunity to study at affordable price.",
      month: "6",
      test: "75",
      path: "BANKING",
    },
    {
      image: cuet,
      title: "Other Courses(CUET)",
      content:
        "The Common University Entrance Test is an all-India test being organized by the National Testing Agency for admission to 45 Central Universities in India.",
      month: "3",
      test: "25",
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

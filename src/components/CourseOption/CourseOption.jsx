import React from "react";
import UPSC from "./UPSCCourse/UPSC";
import RegionalExamPage from "./RegionalExam/RegionalExam";
import SpokenEnglishPage from "./SpokenEnglishCourse/SpokenEnglish";
export default function CourseOption() {
  return (
    <section id="CourseOption">
      <UPSC />
      <RegionalExamPage />
      <SpokenEnglishPage />
    </section>
  );
}

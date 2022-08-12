import React from "react";
import RegionalExamStyle from "./RegionalExamStyle.css";
export default function RegionalExamAchiever(props) {
  return (
    <section id="RegionalExamPage">
      <div className="RegionalExamAchiever">
        <div className="ExamAchieverName">{props.name}</div>
        <div className="RExamRank">{props.rank}</div>
        <div className="RExamDetails">{props.details}</div>
      </div>
    </section>
  );
}

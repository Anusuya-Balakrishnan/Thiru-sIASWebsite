import React from "react";

export default function RegionalContentOnly(props) {
  return (
    <section id="RegionalContentOnly">
      <div className="regional_Achiever__contentonly">
        <div className="ExamAchieverName">{props.name}</div>
        <div className="RExamRank">{props.rank}</div>
        <div className="RExamDetails">{props.details}</div>
      </div>
    </section>
  );
}

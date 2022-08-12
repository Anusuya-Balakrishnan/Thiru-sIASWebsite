import React from "react";
import RegionalExamStyle from "./RegionalExamStyle.css";
import RegionalExamAchiever from "./RegionalExamAchiever";

export default function RegionalExamHtml() {
  return (
    <section id="RegionalExamPage">
      <div className="RegionalExamPageComponent">
        <div className="RegionalTitle">Regional Exam Achievers:</div>
        <div className="RegionalExamComponents">
          <RegionalExamAchiever
            name="Mr.Shiva"
            rank="RRB"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
          nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
          magna risus, orci nisl pellentesque fermentum quam senectus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc
          tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna
          risus, orci nisl pellentesque fermentum quam senectus."
          />
          <RegionalExamAchiever
            name="Ms.Muthunagai"
            rank="Teaching Assistant in Tamilnadu"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
          nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
          magna risus, orci nisl pellentesque fermentum quam senectus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc
          tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna
          risus, orci nisl pellentesque fermentum quam senectus."
          />
          <RegionalExamAchiever
            name="Mr.Navaneetha Krishnan"
            rank="Jail Warder in Puducherry"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
          nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
          magna risus, orci nisl pellentesque fermentum quam senectus.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc
          tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna
          risus, orci nisl pellentesque fermentum quam senectus."
          />
        </div>
      </div>
    </section>
  );
}

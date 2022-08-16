import React from "react";
import RegionalExamStyle from "./RegionalExamStyle.css";
import RegionalExamAchiever from "./RegionalExamAchiever";
import shiva from "./image/shiva.jpeg";
import navaneethan from "./image/navaneethan.jpeg";
import muthunagai from "./image/muthunagai.jpeg";

export default function RegionalExamHtml() {
  return (
    <section id="RegionalExamPage">
      <div className="RegionalExamPageComponent">
        <div className="RegionalExamTitle">Regional Exam Achievers:</div>
        <div className="RegionalExamComponents">
          <RegionalExamAchiever
            image={shiva}
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
            image={muthunagai}
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
            image={navaneethan}
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

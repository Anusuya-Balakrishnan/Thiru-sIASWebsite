import React from "react";
import RegionalExamStyle from "./RegionalExamStyle.css";
import RegionalExamAchiever from "./RegionalExamAchiever";
import RegionalContentOnly from "./RegionalContentOnly";
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
            details="Mr. Shiva Sankar, our student from odisha had cleared RRB prelims in the year 2022."
          />
          <RegionalExamAchiever
            image={muthunagai}
            name="Ms.Muthunagai"
            rank="Teaching Assistant in Tamilnadu"
            details="Muthunagai, a master degree graduate in English from Pondicherry University is our candidate from 2017 batch.
             She cleared Teacher Eligibilty Test and now working as Teaching Assistant  in Tamilnadu."
          />
          <RegionalExamAchiever
            image={navaneethan}
            name="Mr.Navaneetha Krishnan"
            rank="Jail Warder in Puducherry"
            details="Navaneetha Krishnan, jail warder, Puducherry. 
            Our honorable candidate who cleared the jail warder examination and now serving the union territory."
          />
          <RegionalContentOnly
            name="Mr.Navaneetha Krishnan"
            rank="Jail Warder in Puducherry"
            details="Navaneetha Krishnan, jail warder, Puducherry. 
            Our honorable candidate who cleared the jail warder examination and now serving the union territory."
          />
          <RegionalContentOnly
            name="Mr.Navaneetha Krishnan"
            rank="Jail Warder in Puducherry"
            details="Navaneetha Krishnan, jail warder, Puducherry. 
            Our honorable candidate who cleared the jail warder examination and now serving the union territory."
          />
        </div>
      </div>
    </section>
  );
}

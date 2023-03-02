import React from "react";
import RegionalExamStyle from "./RegionalExamStyle.css";
import RegionalExamAchiever from "./RegionalExamAchiever";
import RegionalContentOnly from "./RegionalContentOnly";
import shiva from "./image/siva.jpg";
import navaneethan from "./image/navaneethan.jpg";
import muthunagai from "./image/muthunagai.jpg";
import tejasri from "./image/tejasri.jpg";


export default function RegionalExamHtml() {
  let regionalAchieverWithimage = [{
    image: shiva, name: "Mr.Shiva", rank: "RRB",
    details:"Mr. Shiva Sankar, our student from odisha had cleared RRB prelims in the year 2022."
  },
  {
    image: muthunagai, name: "Ms.Muthunagai", rank: "Teaching Assistant in Tamilnadu",
    details:"Muthunagai, a master degree graduate in English from Pondicherry University is our candidate from 2017 batch.She cleared Teacher Eligibilty Test and now working as Teaching Assistant  in Tamilnadu."
    },
  {
    image: navaneethan, name: "Mr.Navaneetha Krishnan", rank: "Jail Warder in Puducherry",
    details:"Navaneetha Krishnan, jail warder, Puducherry.Our honorable candidate who cleared the jail warder examination and now serving the union territory."
    },
  {
    image: tejasri, name: "Ms. Tejasri", rank: "CAT Exam",
    details:"Ms. Tejasri, from Andhra Pradesh studied at Our Thiru's IAS Academy cleared CAT by an Aptitude and Interview round. She got the seat to study MBA in IIM, Sirmaur."
    }]
  let regionalAchieverWithoutimage=[{
     name: "Mr.Navaneetha Krishnan", rank: "Jail Warder in Puducherry",
    details:"Navaneetha Krishnan, jail warder, Puducherry.Our honorable candidate who cleared the jail warder examination and now serving the union territory."
  }]
  return (
    <section id="RegionalExamPage">
      <div className="RegionalExamPageComponent">
        <div className="RegionalExamTitle">Regional Exam Achievers:</div>
        <div className="RegionalExamComponents">
          {regionalAchieverWithimage.map((each, key) => {
            return (<RegionalExamAchiever
              id={ key}
              image={each.image}
              name={each.name}
              rank={each.rank}
              details={each.details}
            />)
          })}
          
          {regionalAchieverWithoutimage.map((each ,key) => {return (<RegionalContentOnly
            id={ key}  
            name={each.name}
              rank={each.rank}
              details={each.details}
            />) })}

          {/* <RegionalContentOnly
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
          /> */}
        </div>
      </div>
    </section>
  );
}

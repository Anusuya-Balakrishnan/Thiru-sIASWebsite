import React, { useState } from "react";
import syllabusStyle from "./syllabusStyle.css";
import LargeButton from "../Button/LargeButton/LargeButton";
import { IoTime } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";
import syllabusList from "./syllabusContent";

import { useParams } from "react-router-dom";

export default function SyllabusHTML() {
  const [expansionIndex, setexpansionIndex] = useState(-1);
  const [expansionHeight, setexpansionHeight] = useState(0);
  var syllabusList = {
    PREUPSC: {
      id: 1,
      title: "Preliminary Exam",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
      fileName:"upsc.pdf"
    },
    MAINS: {
      id: 2,
      title: "Mains Exam",
      duration: 10,
      noOfTests: 50,
      isDownload: "YES",
      fileName:"upsc.pdf"
    },
    PREMAINS: {
      id: 3,
      title: "Preliminary cums Mains Exam",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
      fileName:"upsc.pdf"
    },
    PRECRASH: {
      id: 4,
      title: "Preliminary Crash",
      duration: 6,
      noOfTests: 40,
      isDownload: "YES",
      fileName:"upsc.pdf"
    },
    CSAT: {
      id: 5,
      title: "CSAT",
      duration: 4,
      noOfTests: 60,
      isDownload: "YES",
      fileName:"upsc.pdf"
    },
    OPTIONAL: {
      id: 6,
      title: "Optional",
      duration: 4,
      noOfTests: 60,
      option1: "Socialogy",
      option2: "Political Science",
      isDownload: "YES",
      fileName:"upsc.pdf"
    },
    TNPSCGROUP1: {
      id: 7,
      title: "TNPSC Group 1",
      duration: 8,
      noOfTests: 50,
      isDownload: "YES",
    },
    TNPSCGROUP2: {
      id: 8,
      title: "TNPSC Group 2",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
    },
    RRB_SSC: {
      id: 9,
      title: "RRB/SSC",
      duration: 8,
      noOfTests: 40,
      isDownload: "YES",
    },
    UDC_LDC: {
      id: 10,
      title: "UDC & LDC",
      duration: 6,
      noOfTests: 25,
      isDownload: "YES",
    },
    ENGBEG: {
      id: 11,
      title: "Spoken English Beginner Level",
      duration: 40,
      isDownload: "NO",
    },
    ENGINT: {
      id: 12,
      title: "Spoken English Intermediate Level",
      duration: 60,
      isDownload: "NO",
    },
    ENGAND: {
      id: 10,
      title: "Spoken English Advance Level",
      duration: 80,
      isDownload: "NO",
    },
    CUETCAT: {
      id: 10,
      title: "CUET & CAT",
      duration: 6,
      noOfTests: 50,
      isDownload: "YES",
    },
    BANKING: {
      id: 11,
      title: "Banking Exam",
      duration: 6,
      noOfTests: 100,
      isDownload: "NO",
    },
  };
  
  var syllabus = {
    PREUPSC:
      [{heading:"",
      title: "General Studies Paper–I",
    content: ["Current events of national and international importance.",
      "History of India and Indian National Movement.",
      "Indian and World Geography-Physical, Social, Economic Geography of India and the World.",
      "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
      "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.",
      "General issues on Environmental Ecology, Biodiversity and Climate Change – that do not require subject specialisation",
      "General Science"]
        
      },
  
    {heading:"",
      title: "CSAT/ General Studies Paper-II",
      content: ["Comprehension",
        "Interpersonal skills including communication skills",
        "Logical reasoning and analytical ability",
        "Decision-making and problem solving",
        "General mental ability",
        "Basic numeracy (numbers and their relations, orders of magnitude, etc.)",
      "Data interpretation (charts, graphs, tables, data sufficiency etc.)"]
        }],
    PREMAINS:[{heading:"Preliminary Exam",
      title: "General Studies Paper–I",
    content: ["Current events of national and international importance.",
      "History of India and Indian National Movement.",
      "Indian and World Geography-Physical, Social, Economic Geography of India and the World.",
      "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
      "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.",
      "General issues on Environmental Ecology, Biodiversity and Climate Change – that do not require subject specialisation",
      "General Science"]
        
      },
    {heading:"",
      title: "CSAT/ General Studies Paper-II",
      content: ["Comprehension",
        "Interpersonal skills including communication skills",
        "Logical reasoning and analytical ability",
        "Decision-making and problem solving",
        "General mental ability",
        "Basic numeracy (numbers and their relations, orders of magnitude, etc.)",
      "Data interpretation (charts, graphs, tables, data sufficiency etc.)"]
        },{heading:"Mains Exam", title: "Qualifying Paper-A", content: ["One of the Indian languages listed in the Constitution’s Eighth Schedule needs to be selected by the candidate"] },
      { heading:"",title: "Qualifying Paper-B", content: ["English"] },
      {heading:"",title:"Paper 1",content:["Essay Paper"]},
      {heading:"",
      title: "Paper 2 – General Studies I", content: ["History and Geography of the World and Society",
      "Indian Heritage and Culture"]
      }, {heading:"",
        title: "Paper 3 – General Studies II", content: ["Polity, Constitution",
        "Governance","Social Justice and International relations"]
      }, {heading:"",
        title: "Paper 4 – General Studies  III", content: ["Economic Development", "Technology",
          "Environment", "Biodiversity",
          "Security and Disaster Management"]
      }, { heading:"",title: "Paper 5 – General Studies  IV", content: ["Ethics", "Integrity", "Aptitude"] },
      {heading:"", title: "Paper 6", content: ["Optional Subject – Paper 1"] },
      {heading:"",title: "Paper 7", content: ["Optional Subject – Paper 2"] }],
    MAINS: [{heading:"", title: "Qualifying Paper-A", content: ["One of the Indian languages listed in the Constitution’s Eighth Schedule needs to be selected by the candidate"] },
      { heading:"",title: "Qualifying Paper-B", content: ["English"] },
      {heading:"",title:"Paper 1",content:["Essay Paper"]},
      {heading:"",
      title: "Paper 2 – General Studies I", content: ["History and Geography of the World and Society",
      "Indian Heritage and Culture"]
      }, {heading:"",
        title: "Paper 3 – General Studies II", content: ["Polity, Constitution",
        "Governance","Social Justice and International relations"]
      }, {heading:"",
        title: "Paper 4 – General Studies  III", content: ["Economic Development", "Technology",
          "Environment", "Biodiversity",
          "Security and Disaster Management"]
      }, { heading:"",title: "Paper 5 – General Studies  IV", content: ["Ethics", "Integrity", "Aptitude"] },
      { heading:"",title: "Paper 6", content: ["Optional Subject – Paper 1"] }, {heading:"", title: "Paper 7", content: ["Optional Subject – Paper 2"] },
    ],
    PRECRASH:[{heading:"",
      title: "General Studies Paper–I",
    content: ["Current events of national and international importance.",
      "History of India and Indian National Movement.",
      "Indian and World Geography-Physical, Social, Economic Geography of India and the World.",
      "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
      "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.",
      "General issues on Environmental Ecology, Biodiversity and Climate Change – that do not require subject specialisation",
      "General Science"]
        
      },
  
    {heading:"",
      title: "CSAT/ General Studies Paper-II",
      content: ["Comprehension",
        "Interpersonal skills including communication skills",
        "Logical reasoning and analytical ability",
        "Decision-making and problem solving",
        "General mental ability",
        "Basic numeracy (numbers and their relations, orders of magnitude, etc.)",
      "Data interpretation (charts, graphs, tables, data sufficiency etc.)"]
      }],
    CSAT: [{heading:"",
      title: "English Comprehension", content: ["Spelling/Detecting Mis- spelt words",
        "Common Error", "Active/Passive Voice of Verbs", "Comprehension Passage",
        "Cloze Passage", "Fill in the Blanks", "Cloze Shuffling of Sentence parts", "Conversions",
        "Sentence Rearrangement", "Grammer", "Shuffling of Sentences in a passage", "Improvement of Sentences", "Synonyms/Homonyms"
      ,"Antonyms","Vocabulary","Idioms & Phrases"]
    },
      {heading:"",
        title: "Logical reasoning and analytical ability", content: [
          "Coding-Decoding", "Alphabet Test", "Series Test", "Ranking Test", "Sitting Arrangement"
          , "Puzzle Test", "Direction Test", "Series", "Inserting the Missing Character", "Mathematical Operation",
          "Blood Relation", "Logical Venn Diagram", "Syllogism", "Calender", "Clock Test", "Cube and Dice",
          "Analytical Reasoning", "Sign Conclusion", "Input-Output", "Decision Making", "Data Analysis", "Other Types Questions",
          "Analogy", "Classification", "Logical Sequence of Words", "Statement Course of Action",
          "Statement Assumptions","Verification of truth of the statement","Situation Reaction Test"
      ]},
      {heading:"",
        title: "Aptitude", content: ["Average", "Number", "Compound Interest", "Partnership"
          , "Problem on Ages", "Calendar", "Boats and Streams", "Clocks", "Height and Distance",
          "Percentage", "Pipes and Cisterns", "Profit and Loss", "Speed and Distance",
          "Simple Interest", "Problem on Trains", "Time and Work", "Alligation and Mixture",
          "Surds and Indices", "HCF and LCM","Area","Ratio and Proportion","Races and Games"
          , "Probability", "Volume and Surface Area","Decimal Fraction","Simplification",
          "Stocks and Shares","Chain Rule","True and Banker's Discount","Logarithm",
          "Square Roots and Cube Roots","Problem on Numbers","Odd Man Out and Series",
          "Algebraic Expressions","Permutation & Combination"]
      }, {heading:"",
        title: "Other Topics", content: ["Interpersonal skills including communication skills",
          "Decision-making and problem-solving","General mental ability"]
      }],
    BANKING: [{heading:"",
      title: "English Comprehension", content: ["Spelling/Detecting Mis- spelt words",
        "Common Error", "Active/Passive Voice of Verbs", "Comprehension Passage",
        "Cloze Passage", "Fill in the Blanks", "Cloze Shuffling of Sentence parts", "Conversions",
        "Sentence Rearrangement", "Grammer", "Shuffling of Sentences in a passage", "Improvement of Sentences", "Synonyms/Homonyms"
      ,"Antonyms","Vocabulary","Idioms & Phrases"]
    },
      {heading:"",
        title: "Logical Reasoning", content: [
          "Coding-Decoding", "Alphabet Test", "Series Test", "Ranking Test", "Sitting Arrangement"
          , "Puzzle Test", "Direction Test", "Series", "Inserting the Missing Character", "Mathematical Operation",
          "Blood Relation", "Logical Venn Diagram", "Syllogism", "Calender", "Clock Test", "Cube and Dice",
          "Analytical Reasoning", "Sign Conclusion", "Input-Output", "Decision Making", "Data Analysis", "Other Types Questions",
          "Analogy", "Classification", "Logical Sequence of Words", "Statement Course of Action",
          "Statement Assumptions","Verification of truth of the statement","Situation Reaction Test"
      ]},
      {heading:"",
        title: "Aptitude", content: ["Average", "Number", "Compound Interest", "Partnership"
          , "Problem on Ages", "Calendar", "Boats and Streams", "Clocks", "Height and Distance",
          "Percentage", "Pipes and Cisterns", "Profit and Loss", "Speed and Distance",
          "Simple Interest", "Problem on Trains", "Time and Work", "Alligation and Mixture",
          "Surds and Indices", "HCF and LCM","Area","Ratio and Proportion","Races and Games"
          , "Probability", "Volume and Surface Area","Decimal Fraction","Simplification",
          "Stocks and Shares","Chain Rule","True and Banker's Discount","Logarithm",
          "Square Roots and Cube Roots","Problem on Numbers","Odd Man Out and Series",
          "Algebraic Expressions","Permutation & Combination"]
      }],
    TNPSCGROUP1: [
      {
        heading: "",
      title: "TNPSC Group I Preliminary Syllabus", content: ["General Science",
        "Current events", "Geography", "History and Culture of India",
        "Indian Polity", "Indian Economy", "Indian National Movement", "Aptitude and Mental Ability",
        "Language: General Tamil (or) General English (Only for Group II, Group II A)"]
    },
      {
        heading: "TNPSC Group I Mains Syllabus", title: "PAPER – I / Unit I",
        content: ["Modern History of India and Indian Culture", "General Mental Ability",
          "Role and Impact of Science and Technology in the development of India and Tamil Nadu"]
      },
      {
        heading: "", title: "PAPER – II / Unit II and III",
        content: ["Indian Polity and emerging political trends across the world affecting India and Geography of India",
          "Tamil language, Tamil society–its culture and heritage / English language,English language skills", "Administration of Union and States with special reference to Tamil Nadu"],
        
      }, {
        heading: "", title: "PAPER – III / Unit IV and V", content: [
        "Current events of national and international importance","Current economic trends; Indian economy and impact of global economy on India","Socio-economic issues in India and Tamil Nadu"
      ]}],TNPSCGROUP2:[{
        heading: "",
      title: "TNPSC Group II Preliminary Syllabus", content: ["General Science",
        "Current events", "Geography", "History and Culture of India",
        "Indian Polity", "Indian Economy", "Indian National Movement", "Aptitude and Mental Ability",
        "Language: General Tamil (or) General English (Only for Group II, Group II A)"]
    },
      {
        heading: "TNPSC Group II Mains Syllabus", title: "PAPER – I / Unit I",
        content: ["Role and Impact of Science and Technology in the development of India and Tamil Nadu"]
      },
      {
        heading: "", title: "PAPER – II / Unit II and III",
        content: ["Administration of Union and States with special reference to Tamil Nadu","Socio-economic issues in India and Tamil Nadu"],
        
      }, {
        heading: "", title: "PAPER – III / Unit IV and V", content: [
        "Current Issues at National Level","Current Issues at State Level"
      ]}]
  }
  let { id } = useParams();
  console.log("path=" + id);
  var courseObject = syllabusList[id];
  console.log("courseObject" + courseObject.title);
  var courseSyllabus = syllabus[id];

  return (
    <section className="SyllabusPage">
      <div className="syllabus_container">
        <div className="syllabus_container_body">
          <div className="syllabus_container_body_title">
            <div> {courseObject.title} Syllabus</div>
          </div>
          <div className="syllabus_container_body_middle">
            <div className="syllabus_container_body_extensionPart">
              {courseSyllabus.map((each, index) => {
                return (
                  <div key={index} className="extensionPart">

                    {/* extension Heading */}
                    { each.heading!=="" && <div className="extension-heading">{each.heading}: </div>}
                    {/* extensionTopic */}
                    <div
                      className="extensionPart_topic"
                      onClick={() => {
                        setexpansionIndex(index);

                        let expansion_height = document
                          .getElementById(`ep-content-${index}`)
                          .getBoundingClientRect().height;
                        setexpansionHeight(Math.floor(expansion_height));
                      }}
                    >
                      <div className="extensionPart_topic_details">
                        <p>{each.title}</p>
                        <p>{index === expansionIndex ?<AiOutlineCaretUp/>:<AiOutlineCaretDown/>
                         }</p>
                      </div>
                    </div>
                    {/* extensionContent  */}
                    <div
                      style={{
                        height: index === expansionIndex ? expansionHeight : 0,
                      }}
                      className="extensionPart_content"
                      id="extensionPart_content"
                    >
                      <div
                        id={`ep-content-${index}`}
                        className="extensionPart-content-box"
                      >
                        {each.content.map((eachContent,key) => {return <div>{eachContent}</div>})}
                        {/* <div>{each.content}</div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
              {courseObject.isDownload == "YES" && (
                <div className="syllabus_container_button">
                  {/* <a
                    href={() => {
                      window.history.back();
                    }}
                    className="button_previouslink"
                  >
                    back
                  </a> */}
                  <a
                    className="downloadButton"
                    href={`http://192.168.1.7:3000/${courseObject.fileName}`}
                  download={`${courseObject.fileName}`}
                  >
                    <LargeButton value="Download" />
                  </a>
                </div>
              )}
            </div>

            <div className="syllabus_container_body_coursebox_parent">
              <div className="syllabus_container_body_coursebox">
                <div className="coursebox_title">{courseObject.title}</div>
                <div className="coursebox_icons_box">
                  <div className="coursebox_icons">
                    <span className="coursebox-each-icons">
                      <IoTime />
                    </span>
                    {courseObject.duration} Month
                  </div>
                  {courseObject.noOfTests != null && (
                    <div className="coursebox_icons">
                      <span className="coursebox-each-icons">
                        <TbReportSearch />
                      </span>
                      {courseObject.noOfTests} Tests
                    </div>
                  )}
                  <div className="coursebox_icons">
                    <span className="coursebox-each-icons">
                      <MdEventNote />
                    </span>
                    Weekday/Weekend Batch
                  </div>
                  <div className="coursebox_icons">
                    <span className="coursebox-each-icons">
                      <SiGoogleclassroom />
                    </span>
                    Online/Offline Classes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

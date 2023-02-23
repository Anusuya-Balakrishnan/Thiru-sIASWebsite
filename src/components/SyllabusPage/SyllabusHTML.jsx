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
      [{
      title: "General Studies Paper–I",
    content: ["Current events of national and international importance.",
      "History of India and Indian National Movement.",
      "Indian and World Geography-Physical, Social, Economic Geography of India and the World.",
      "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
      "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.",
      "General issues on Environmental Ecology, Biodiversity and Climate Change – that do not require subject specialisation",
      "General Science"]
        
      },
  
    {
      title: "CSAT/ General Studies Paper-II",
      content: ["Comprehension",
        "Interpersonal skills including communication skills",
        "Logical reasoning and analytical ability",
        "Decision-making and problem solving",
        "General mental ability",
        "Basic numeracy (numbers and their relations, orders of magnitude, etc.)",
      "Data interpretation (charts, graphs, tables, data sufficiency etc.)"]
        }],
    PREMAINS:[{
      title: "Preliminary Exam General Studies Paper–I",
    content: ["Current events of national and international importance.",
      "History of India and Indian National Movement.",
      "Indian and World Geography-Physical, Social, Economic Geography of India and the World.",
      "Indian Polity and Governance – Constitution, Political System, Panchayati Raj, Public Policy, Rights Issues, etc.",
      "Economic and Social Development – Sustainable Development, Poverty, Inclusion, Demographics, Social Sector initiatives, etc.",
      "General issues on Environmental Ecology, Biodiversity and Climate Change – that do not require subject specialisation",
      "General Science"]
        
      },
    {
      title: "Preliminary Exam CSAT/ General Studies Paper-II",
      content: ["Comprehension",
        "Interpersonal skills including communication skills",
        "Logical reasoning and analytical ability",
        "Decision-making and problem solving",
        "General mental ability",
        "Basic numeracy (numbers and their relations, orders of magnitude, etc.)",
      "Data interpretation (charts, graphs, tables, data sufficiency etc.)"]
        },{ title: "Mains Qualifying Paper-A", content: ["One of the Indian languages listed in the Constitution’s Eighth Schedule needs to be selected by the candidate"] },
      { title: "Mains Qualifying Paper-B", content: ["English"] },
      {title:"Paper 1",content:["Essay Paper"]},
      {
      title: "Paper 2 – General Studies I", content: ["History and Geography of the World and Society",
      "Indian Heritage and Culture"]
      }, {
        title: "Paper 3 – General Studies II", content: ["Polity, Constitution",
        "Governance","Social Justice and International relations"]
      }, {
        title: "Paper 4 – General Studies  III", content: ["Economic Development", "Technology",
          "Environment", "Biodiversity",
          "Security and Disaster Management"]
      }, { title: "Paper 5 – General Studies  IV", content: ["Ethics", "Integrity", "Aptitude"] },
      {title:"Paper 6",content:["Optional Subject – Paper 1"]},{title:"Paper 7",content:["Optional Subject – Paper 2"]}],
    MAINS: [{ title: "Qualifying Paper-A", content: ["One of the Indian languages listed in the Constitution’s Eighth Schedule needs to be selected by the candidate"] },
      { title: "Qualifying Paper-B", content: ["English"] },
      {title:"Paper 1",content:["Essay Paper"]},
      {
      title: "Paper 2 – General Studies I", content: ["History and Geography of the World and Society",
      "Indian Heritage and Culture"]
      }, {
        title: "Paper 3 – General Studies II", content: ["Polity, Constitution",
        "Governance","Social Justice and International relations"]
      }, {
        title: "Paper 4 – General Studies  III", content: ["Economic Development", "Technology",
          "Environment", "Biodiversity",
          "Security and Disaster Management"]
      }, { title: "Paper 5 – General Studies  IV", content: ["Ethics", "Integrity", "Aptitude"] },
      {title:"Paper 6",content:["Optional Subject – Paper 1"]},{title:"Paper 7",content:["Optional Subject – Paper 2"]}]
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
                  <a
                    href={() => {
                      window.history.back();
                    }}
                    className="button_previouslink"
                  >
                    back
                  </a>
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

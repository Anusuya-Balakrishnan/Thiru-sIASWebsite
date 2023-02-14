import React, { useState } from "react";
import syllabusStyle from "./syllabusStyle.css";
import LargeButton from "../Button/LargeButton/LargeButton";
import { IoTime } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import syllabusList from "./syllabusContent";

import { useParams } from "react-router-dom";

export default function SyllabusHTML() {
  const [expansionIndex, setexpansionIndex] = useState(0);
  const [expansionHeight, setexpansionHeight] = useState(0);
  var syllabusList = {
    PREUPSC: {
      id: 1,
      title: "Preliminary Exam",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
    },
    MAINS: {
      id: 2,
      title: "Mains Exam",
      duration: 10,
      noOfTests: 50,
      isDownload: "YES",
    },
    PREMAINS: {
      id: 3,
      title: "Preliminary cums Mains Exam",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
    },
    PRECRASH: {
      id: 4,
      title: "Preliminary Crash",
      duration: 6,
      noOfTests: 40,
      isDownload: "YES",
    },
    CSAT: {
      id: 5,
      title: "CSAT",
      duration: 4,
      noOfTests: 60,
      isDownload: "YES",
    },
    OPTIONAL: {
      id: 6,
      title: "Optional",
      duration: 4,
      noOfTests: 60,
      option1: "Socialogy",
      option2: "Political Science",
      isDownload: "YES",
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
  var syllabusContent = [
    {
      title: "General Studies Paper – I",
      content:
        "Current events of national and international importance.Current events of national and international importanceCurrent events of national and international importanceCurrent events of national and international importance",
    },
    {
      title: "General Studies Paper – I",
      content: "Current events of national and international importance.",
    },
    {
      title: "General Studies Paper – I",
      content: "Current events of national and international importance.",
    },
    {
      title: "General Studies Paper – I",
      content: "Current events of national and international importance.",
    },
  ];
  let { id } = useParams();
  console.log("path=" + id);
  var courseObject = syllabusList[id];
  console.log("courseObject" + courseObject.title);

  return (
    <section className="SyllabusPage">
      <div className="syllabus_container">
        <div className="syllabus_container_body">
          <div className="syllabus_container_body_title">
            <div> {courseObject.title} Syllabus</div>
          </div>
          <div className="syllabus_container_body_middle">
            <div className="syllabus_container_body_extensionPart">
              {syllabusContent.map((each, index) => {
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
                        <p>+</p>
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
                        <div>{each.content}</div>
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
                    href="http://192.168.1.22:3000/zoho2.pdf"
                    download="zoho2.pdf"
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

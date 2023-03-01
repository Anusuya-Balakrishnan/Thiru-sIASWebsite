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
  const [expandable, setexpandable] = useState(false);
  var syllabusList = {
    PREUPSC: {
      id: 1,
      title: "Preliminary Exam",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
      fileName: "upsc.pdf",
      syllabuscontent:1,
    },
    MAINS: {
      id: 2,
      title: "Mains Exam",
      duration: 10,
      noOfTests: 50,
      isDownload: "YES",
      fileName: "upsc.pdf",
      syllabuscontent:1,
    },
    PREMAINS: {
      id: 3,
      title: "Preliminary cums Mains Exam",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
      fileName:"upsc.pdf",syllabuscontent:1,
    },
    PRECRASH: {
      id: 4,
      title: "Preliminary Crash",
      duration: 6,
      noOfTests: 40,
      isDownload: "YES",
      fileName:"upsc.pdf",syllabuscontent:1,
    },
    CSAT: {
      id: 5,
      title: "CSAT",
      duration: 4,
      noOfTests: 60,
      isDownload: "YES",
      fileName:"upsc.pdf",syllabuscontent:1,
    },
    OPTIONAL: {
      id: 6,
      title: "Optional",
      duration: 4,
      noOfTests: 60,
      option1: "Socialogy",
      option2: "Political Science",
      isDownload: "YES",
      fileName:"upsc.pdf",syllabuscontent:2,
    },
    TNPSCGROUP1: {
      id: 7,
      title: "TNPSC Group 1",
      duration: 8,
      noOfTests: 50,
      isDownload: "YES",
      fileName:"tnpscGroup1.pdf",syllabuscontent:1,
    },
    TNPSCGROUP2: {
      id: 8,
      title: "TNPSC Group 2",
      duration: 8,
      noOfTests: 80,
      isDownload: "YES",
      fileName:"tnpscGroup2.pdf",syllabuscontent:1,
    },
    RRB_SSC: {
      id: 9,
      title: "RRB/SSC",
      duration: 8,
      noOfTests: 40,
      isDownload: "YES",syllabuscontent:2,
    },
    UDC_LDC: {
      id: 10,
      title: "UDC & LDC",
      duration: 6,
      noOfTests: 25,
      isDownload: "YES",fileName:"udc-ldc.pdf",syllabuscontent:1,
    },
    ENGBEG: {
      id: 11,
      title: "Spoken English Beginner Level",
      duration: 40,
      isDownload: "NO",syllabuscontent:0,
    },
    ENGINT: {
      id: 12,
      title: "Spoken English Intermediate Level",
      duration: 60,
      isDownload: "NO",syllabuscontent:0,
    },
    ENGAND: {
      id: 10,
      title: "Spoken English Advance Level",
      duration: 80,
      isDownload: "NO",syllabuscontent:0,
    },
    CUETCAT: {
      id: 10,
      title: "CUET Exam",
      duration: 6,
      noOfTests: 50,
      isDownload: "YES", syllabuscontent: 1,
      fileName:"cuet.pdf"
    },
    BANKING: {
      id: 11,
      title: "Banking Exam",
      duration: 6,
      noOfTests: 100,
      isDownload: "NO",syllabuscontent:1,
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
        ]
      }],
    TNPSCGROUP2: [{
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
        ]
      }],
    OPTIONAL: [
      [{
      heading: "Socialogy ", title: "Paper-I",
      content: ["Modernity and social changes in Europe and emergence of Sociology.",
        "Scope of the subject and comparison with other social sciences.","Sociology and common sense. "]
    },
      {
        heading: "Sociology", title: "PAPER– I(Fundamentals of Sociology )",
        content: ["Sociology - The Discipline",
          "Research Methods and Analysis", "Sociological Thinkers", "Stratification and Mobility"
          , "Works and Economic Life", "Politics and Society", "Religion and Society",
          "Systems of Kinship","Social Change in Modern Society"]
      }, {
        heading: "", title: "PAPER–II(Indian Society : Structure and Change)",
        content: ["Perspectives on the Study of Indian Society",
          "Impact of colonial rule on Indian society", "Rural and Agrarian Social Structure",
          "Caste System", "Tribal Communities in India",
          "Social Classes in India", "Systems of Kinship in India", "Religion and Society",
          "Visions of Social Change in India", "Rural and Agrarian Transformation in India",
          "Industrialization and Urbanisation in India", "Politics and Society",
          "Social Movements in Modern India","Population Dynamics","Challenges of Social Transformation"]
        }],
      [{
        heading: "Political Science and International Relations", title: "Paper-I",
        content: ["Political Theory and Indian Politics", "Indian Nationalism",]
      }, {
        heading: "", title: "Paper-II", content: ["Comparative Politics and International Relations",
          "Comparative Political Analysis and International Politics",
        "India and the World"]
        }]],
    UDC_LDC: [{
      heading: "", title: "UDC-LDC", content: ["General Mathematics",
        "General Science", "General English", "Indian History and Geography",
        "Indian Economics","Constitution of India","General Knowledge and Current affairs"]
    }],
    RRB_SSC: [[{
      heading: "RRB", title: " Stage 1 Computer Based Test(CBT)", content:
        ["Mathematics",
      "General Awareness on Current Affairs"," General Intelligence and Reasoning","General Science"]
    },{
      heading: "", title: " Stage 2 Computer Based Test(CBT)", content:  ["Mathematics",
      "General Awareness on Current Affairs"," General Intelligence and Reasoning","General Science"]
      }], [{
        heading: "SSC", title: "Combined Graduate Level (Tier-I)",
        content: ["General Intelligence & Reasoning",
          "General Awareness","Numerical Aptitude","English Comprehension","Reasoning Ability"
        ]
      }, {
        heading: "", title: "Combined Graduate Level (Tier-II)", content: ["Mathematical Abilities",
          "Reasoning and General Intelligence", "English Language and Comprehension",
          "General Awareness"]
        }]],
    CUETCAT: [{ heading: "", title: "Economics", content: [] },
      { heading: "", title: "History", content: [] },
      { heading: "", title: "Geography", content: [] },
      { heading: "", title: "Political Science", content: [] }, {heading:"", title:"Sociology",content:[]}]
    
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

            {/* syllabus content */}
            <div className="syllabus_container_body_extensionPart" >
            {(courseObject.syllabuscontent==1)&& <div>{courseSyllabus.map((each, index) => {
                return (
                  <div key={index} className="extensionPart">

                    {/* extension Heading */}
                    { each.heading!=="" && <div className="extension-heading">{each.heading}: </div>}
                    {/* extensionTopic */}
                    <div
                      className="extensionPart_topic"
                      onClick={() => {
                        setexpansionIndex(index);
                        setexpandable(!expandable);

                        let expansion_height = document
                          .getElementById(`ep-content-${index}`)
                          .getBoundingClientRect().height;
                        setexpansionHeight(Math.floor(expansion_height));
                      }}
                    >
                      <div className="extensionPart_topic_details">
                        <p>{each.title}</p>
                        <p>{index === expansionIndex && expandable?<AiOutlineCaretUp/>:<AiOutlineCaretDown/>
                         }</p>
                      </div>
                    </div>
                    {/* extensionContent  */}
                    <div
                      style={{
                        height: index === expansionIndex && expandable ? expansionHeight : 0,
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
                  download={`${courseObject.fileName}`} target="blank"
                  >
                    <LargeButton value="Download" />
                  </a>
                </div>
              )}</div>
            } 
            
            {(courseObject.syllabuscontent == 2) && <div>
                {courseSyllabus.map((option, optionIndex) => {
                  return (<div>
                    {option.map((each, index) => {
                return (
                  <div key={index} className="extensionPart">

                    {/* extension Heading */}
                    { each.heading!=="" && <div className="extension-heading">{each.heading}: </div>}
                    {/* extensionTopic */}
                    <div
                      className="extensionPart_topic"
                      onClick={() => {
                        setexpansionIndex(optionIndex.toString()+index.toString());
                          console.log("index",typeof(expansionIndex));
                        let expansion_height = document
                          .getElementById(`ep-content-${optionIndex.toString()+index.toString()}`)
                          .getBoundingClientRect().height;
                        setexpansionHeight(Math.floor(expansion_height));
                      }}
                    >
                      <div className="extensionPart_topic_details">
                        <p>{each.title}</p>
                        <p>{index == expansionIndex[1] && optionIndex==expansionIndex[0] ?<AiOutlineCaretUp/>:<AiOutlineCaretDown/>
                         }</p>
                      </div>
                    </div>
                    {/* extensionContent  */}
                    <div
                      style={{
                        height: index == expansionIndex[1] && optionIndex==expansionIndex[0] ? expansionHeight : 0,
                      }}
                      className="extensionPart_content"
                      id="extensionPart_content"
                    >
                      <div
                        id={`ep-content-${optionIndex.toString()+index.toString()}`}
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
                    className="downloadButton"
                    href={`http://192.168.1.7:3000/${courseObject.fileName}`} 
                  download={`${courseObject.fileName}`} target="blank"
                  >
                    <LargeButton value="Download" />
                  </a>
                </div>
              )}
                  </div>)
                })}
              </div>
              }

              {courseObject.syllabuscontent == 0 }
        </div>
              
            

            {/* course box */}
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

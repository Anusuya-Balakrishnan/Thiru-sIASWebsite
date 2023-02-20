import React, { useEffect, useState, useRef } from "react";
import AutoStyle from "./AutoStyle.css";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";
import image5 from "./images/5.jpeg";
import ReviewComponent from "../ReviewComponent/ReviewComponent";
import SmallReview from "../ReviewComponent/SmallReview.jsx";
import { RiH1 } from "react-icons/ri";
import { VscDebugStart } from "react-icons/vsc";
import { RiStopMiniLine } from "react-icons/ri";
export default function AutoHtml() {
  let reviewContent = [
    {
      personImage: image1,
      personName: "Kavitha",
      reviewDuration: "6 months ago",
      para1:
        "Good Academy for UPSC and for other Competetive exams too.Individual concern is given for each and every aspirant.",
      para2:
        "Classes are taken from basic levels and we can experience a difference in learning(i.e. learning by understanding, analysing, applying)when compared to schools where we were made to memorize things.",
      para3:
        "Sir motivates and lays path for a colourful future. " +
        "He encourages students to have a healthy discussion on various topics," +
        "current affairs which provides opportunity to explore our knowledge.",

      para4: "Best Institute for cracking the exams.",
      para5: "Thank you Sir.",
    },
    {
      personImage: image2,
      personName: "Rasigha ES",
      reviewDuration: "6 months ago",
      para1: "I joined this institute just after my schooling.",
      para2:
        "Like this institute has shaped me as a better person where i started to see the developments inside me as soon as i joined this place. It's just not about preparing for exams. It's much more than that.",
      para3:
        "I was shaped as a person firstly..... which is the first step for preparing civil service.",
      para4:
        "Classes are always interactive...i was continuously boosted...Your voice is always heard...... never monotonous at all..",
      para5:
        "As an added advantage i was also able to develop my personality and communicative skills.... I learnt good values... Feeling lucky to have joined this institute !",
    },
    {
      personImage: image3,
      personName: "Abinash M",
      reviewDuration: "6 months ago",
      para1:
        "A best place to crack upsc \n Best infrastructure \n Best coaching \nBest personal attention",
      para2:
        "I have personally seen other upsc coaching institution, but this is best.",
      para3: "Those who are in dilemma, whether to join this academy.",
      para4:
        "Thiru's IAS academy - knowledge through empowerment 👏💪.. ......",
      para5: "",
    },
    {
      personImage: image4,
      personName: "Shamini",
      reviewDuration: "7 months ago",
      para1: "Best IAS academy in Pondicherry with an excellent mentor.. ",
      para2:
        "Joined here after enquiring many institutes. Lucky to be under an educator like Thiru sir.",
      para3: "",
      para4: "",
      para5: "",
    },
    {
      personImage: image5,
      personName: "Chandran R ",
      reviewDuration: "3 years ago",
      para1:
        "The best stop for UPSC preparation which we can find in our hometown itself. ",
      para2:
        "The classes had been conducting by the master with ultimate personal care and ease for aspirants",
      para3:
        "The syllabus had been covered from the very basics to the very extent to make the preparation much more comfortable",
      para4:
        "I highly recommend this institution for your preparation, since I'm benefiting from the institution to an utmost level for my preparation.",
      para5: "",
    },
  ];
  const [displayValue, setdisplayValue] = useState("none");
  let count = 0;
  let ReviewSlideImage = useRef(0);
  let SlideContainerRef = useRef(0);
  let slideWidthValue;
  var interval = 0;
  const [stopValue, setStopValue] = useState("false");
  function timer() {
    if (!stopValue) {
      interval = setInterval(() => {
      let SlideWidth = ReviewSlideImage.current.clientWidth;
      if (count < reviewContent.length - 1) {
        count++;
      } else {
        count = 0;
      }
      slideWidthValue = -(SlideWidth * count) + "px";
      SlideContainerRef.current.style.left = slideWidthValue;
    }, 5000);
    }
    else {
      clearInterval(interval);
      console.log(interval);
  } 
  }
 
  
  useEffect(() => {
    timer();
  }, []);


  return (
    <section id="AutoHtml">
      <div className="slide_frame_parent" onMouseOver={() => { setdisplayValue("block") }}
        onMouseOut={() => { setdisplayValue("none") }}
        onClick={() => {
          setStopValue(!stopValue);
          timer();
        }}>
        <div className="SlideFrame_container" style={{ display: displayValue }}>
          <div className="SlideFrame-container-icons">
            <VscDebugStart />
          <RiStopMiniLine/>
          </div>
          
        </div>
        <div className="SlideFrame">
        <div className="SlideContainer" ref={SlideContainerRef}>
          {reviewContent.map((eachReiview, index) => {
            return (
              <div
                key={index}
                className="ReviewSlideImage"
                ref={ReviewSlideImage}
              >
                <ReviewComponent
                  image={eachReiview.personImage}
                  name={eachReiview.personName}
                  duration={eachReiview.reviewDuration}
                  para1={eachReiview.para1}
                  para2={eachReiview.para2}
                  para3={eachReiview.para3}
                  para4={eachReiview.para4}
                  para5={eachReiview.para5}
                />
              </div>
            );
          })}
        </div>
          </div>
        </div>
    </section>
  );
}

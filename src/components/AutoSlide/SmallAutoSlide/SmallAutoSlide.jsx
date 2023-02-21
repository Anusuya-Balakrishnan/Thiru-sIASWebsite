import React from "react";
import SmallAutoStyle from "./SmallAutoStyle.css";
import SmallReview from "../../ReviewComponent/SmallReview";
import image1 from "../images/1.jpeg";
import image2 from "../images/2.jpeg";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.jpeg";
import image5 from "../images/5.jpeg";
import { VscDebugStart } from "react-icons/vsc";
import { RiStopMiniLine } from "react-icons/ri";
import { useRef, useEffect,useState } from "react";
export default function SmallAutoSlide() {
  let reviewContent = [
    {
      personImage: image1,
      personName: "Yoga Dakshnamoorthy",
      reviewDuration: "1 months ago",
      para: ["My experience with this academy was quite well and I have learned a lot.", "Equal attention was given to every individual which is the best part of Thiru's IAS academy and faculties.",
        "So I would suggest if your really interested in general studies for any government exams you should try this academy.",
      "It helps u overcome your fears and helps u In achieving your goals like me.."]
    },
    {
      personImage: image2,
      personName: "Antony",
      reviewDuration: "1 months ago",
      para: ["If you wanna learn how to study and crack any particular exam",
        "The knowledge that this institute provides to a Candidate is really more informative.",
        "Classes are taken regularly, doubts have been clarified, TEST after completing the portion or in the middle will be mandatory",
        "The more test you write, the more you will know where is your preparation level is.. according to me you won't find a institute like this through out pondicherry... Thankyou"]
    },
    {
      personImage: image3,
      personName: "Arthya",
      reviewDuration: "2 months ago",
      para: ["I joined here for CUET coaching", "After joining here, I guess i have developed an interest for solving aptitude.",
      "I am attending mock papers and the questions are very standard","Sir is also constantly motivating me to crack this entrance.","Thank you sir."]
    },
    {
      personImage: image4,
      personName: "Kaviya",
      reviewDuration: "4 months ago",
      para: ["One of the best institute in pondicherry that helps to clear competitive examinations.",
        "I  am online batch student they are giving individual attention and also teaching the concepts from basics for clear understanding",
      "In short ,best Institute which helps to pursue our goal."]
    },
    {
      personImage: image5,
      personName: "Gautam Rajbhar",
      reviewDuration: "3 month ago",
      para: ["Hello, I'm from Uttar Pradesh and joined this institution for UPSC preperation and i happy to say that I'm at the good place bcz they provide conceptual knowledge and eco friendly environment"
      ,"It's a good study zone...."]
    },
    {
      personImage: image5,
      personName: "kirthika",
      reviewDuration: "10 month ago",
      para: ["Best academy for those who are appearing for competitive exams."
        , "This academy  helps  in best learning of concepts by relating it with day-to-day events.", "I admired their way of teaching as  they handle us cool and keeping lessons fun and  engaging i.e the classes are noteworthy and refreshing for learning concepts and furthermore it helps in improving our knowledge and communication skills.",
        "Thankyou for helping me in developing my confidence, personality, knowledge and skills sir.","Your lessons and sayings are always significant and effective","And that urged me to read more and more."]
    },
     {
      personImage: image5,
      personName: "Rajini Ira",
      reviewDuration: "11 month ago",
       para: ["Best institution for upsc preparation.", "Good infrastructure for students who are all trying to crack the examination."
         , "I joined in a different institution in Pondicherry.But i was not satisfied with the classes", "Later from Google i came to know about THIRU'S IAS ACADEMY.And i joined here with lot of doubts.",
         "Within a week i started to learn subjects from thiru sir.","The aptitude classes were explained in very much better way."]
    },
     {
      personImage: image5,
      personName: "Kavitha",
      reviewDuration: "1 year ago",
       para: ["Good Academy for UPSC and for other Competetive exams too.",
         "Individual concern is given for each and every aspirant.", "Classes are taken from basic levels and we can experience a difference in learning(i.e. learning by understanding, analysing, applying)when compared to schools where we were made to memorize things."
       ,"Sir motivates and lays path for a colourful future","He encourages students to have a healthy discussion on various topics, current affairs which provides opportunity to explore our knowledge","Best Institute for cracking the exams."]
    },
     {
      personImage: image5,
      personName: "Rasigha",
      reviewDuration: "1 year ago",
       para: ["I joined this institute just after my schooling.",
         "Like this institute has shaped me as a better person where i started to see the developments inside me as soon as i joined this place. It's just not about preparing for exams. It's much more than that.",
         "I was shaped as a person firstly..... which is the first step for preparing civil service.",
         "Classes are always interactive...i was continuously boosted...",
         "Your voice is always heard...... never monotonous at all.","As an added advantage i was also able to develop my personality and communicative skills....","I learnt good values...","Feeling lucky to have joined this institute !"]
    },
     {
      personImage: image5,
      personName: "Abinash",
      reviewDuration: "1 year ago",
       para: ["A best place to crack upsc", "Best infrastructure", "Best coaching", "Best personal attention", "I have personally seen other upsc coaching institution, but this is best.",
         "Those who are in dilemma, whether to join this academy.","Thiru's IAS academy - knowledge through empowerment 👏💪.. ......"]
    },
     {
      personImage: image5,
      personName: "Abinash",
      reviewDuration: "1 year ago",
       para: ["A best place to crack upsc", "Best infrastructure", "Best coaching", "Best personal attention", "I have personally seen other upsc coaching institution, but this is best.",
         "Those who are in dilemma, whether to join this academy.","Thiru's IAS academy - knowledge through empowerment 👏💪.. ......"]
    },
  ];
  let count = 0;
  let ReviewSlideImage = useRef(0);
  let SlideContainerRef = useRef(0);
  let slideWidthValue;
  const [stopValue, setStopValue] = useState(true);
  const [inter, setinter] = useState(null)
  const [displayValue, setdisplayValue] = useState("none");
  function timer() {
   let thisInter = setInterval(() => {
      console.log('calling..');
       let SlideWidth = ReviewSlideImage.current.clientWidth;
      if (stopValue) {
        if (count < reviewContent.length - 1) {
          console.log(count);
          count++;
        } else {
          count = 0;
        }
        slideWidthValue = -(SlideWidth * count) + "px";
        SlideContainerRef.current.style.left = slideWidthValue;
      } else { 
        console.log('this inster clear ');

      }
      
   }, 5000);
    
    return thisInter;
  
 
  }
 
  
  useEffect(() => {
   setinter(timer())
  }, [stopValue]);

  return (
    <section id="SmallAutoSlide">
      <div className="small-auto-slide-container"
        onMouseOver={() => { setdisplayValue("block") }}
        onMouseOut={() => { setdisplayValue("none") }}
        onClick={() => {
          setStopValue(!stopValue);
          clearInterval(inter)
        }}>
        <div className="small-stop-start" style={{ display: displayValue }}>
          <div className="SlideFrame-container-icons">

            {stopValue ? <VscDebugStart /> : <RiStopMiniLine />}
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
                <SmallReview
                  image={eachReiview.personImage}
                  name={eachReiview.personName}
                  duration={eachReiview.reviewDuration}
                  para={eachReiview.para}
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

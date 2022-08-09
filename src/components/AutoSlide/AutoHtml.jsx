import React from "react";
import AutoStyle from "./AutoStyle.css";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";
import image5 from "./images/5.jpeg";

import ReviewComponent from "../ReviewComponent/ReviewComponent";

export default function AutoHtml() {
  return (
    <section id="AutoHtml">
      <div className="SlideFrame">
        <div className="SlideContainer">
          <div className="SlideImage">
            <ReviewComponent
              image={image1}
              name="Kavitha C"
              duration="5 month ago"
              para1="Good Academy for UPSC and for other Competetive exams too.
            Individual concern is given for each and every aspirant."
              para2="Classes are taken from basic levels and we can experience a
              difference in learning(i.e. learning by understanding, analysing,
              applying)when compared to schools where we were made to memorize
              things."
              para3="Sir motivates and lays path for a colourful future. He
                encourages students to have a healthy discussion on various
                topics, current affairs which provides opportunity to explore
                our knowledge."
              para4="Best Institute for cracking the exams."
            />
          </div>
          <div className="SlideImage">
            <ReviewComponent
              image={image2}
              name="Rasigha ES"
              duration="5 month ago"
              para1="I joined this institute just after my schooling."
              para2="Like this institute has shaped me as a better person 
              where i started to see the developments inside me as soon as i 
              joined this place. It's just not about preparing for exams. 
              It's much more than that."
              para3="I was shaped as a person firstly..... which is the first step for preparing civil service."
              para4="Feeling lucky to have joined this institute!"
            />
          </div>
          <div className="SlideImage">
            <ReviewComponent
              image={image3}
              name="Kavitha C"
              duration="5 month ago"
              para1="Good Academy for UPSC and for other Competetive exams too.
            Individual concern is given for each and every aspirant."
              para2="Classes are taken from basic levels and we can experience a
              difference in learning(i.e. learning by understanding, analysing,
              applying)when compared to schools where we were made to memorize
              things."
              para3="Sir motivates and lays path for a colourful future. He
                encourages students to have a healthy discussion on various
                topics, current affairs which provides opportunity to explore
                our knowledge."
              para4="Best Institute for cracking the exams."
            />
          </div>
          <div className="SlideImage">
            <ReviewComponent
              image={image4}
              name="Kavitha C"
              duration="5 month ago"
              para1="Good Academy for UPSC and for other Competetive exams too.
            Individual concern is given for each and every aspirant."
              para2="Classes are taken from basic levels and we can experience a
              difference in learning(i.e. learning by understanding, analysing,
              applying)when compared to schools where we were made to memorize
              things."
              para3="Sir motivates and lays path for a colourful future. He
                encourages students to have a healthy discussion on various
                topics, current affairs which provides opportunity to explore
                our knowledge."
              para4="Best Institute for cracking the exams."
            />
          </div>
          <div className="SlideImage">
            <ReviewComponent
              image={image5}
              name="Kavitha C"
              duration="5 month ago"
              para1="Good Academy for UPSC and for other Competetive exams too.
            Individual concern is given for each and every aspirant."
              para2="Classes are taken from basic levels and we can experience a
              difference in learning(i.e. learning by understanding, analysing,
              applying)when compared to schools where we were made to memorize
              things."
              para3="Sir motivates and lays path for a colourful future. He
                encourages students to have a healthy discussion on various
                topics, current affairs which provides opportunity to explore
                our knowledge."
              para4="Best Institute for cracking the exams."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
let count = 0;
let timeout = setInterval(() => {
  document.getElementsByClassName("SlideContainer")[0].style.left =
    -(400 * count) + "px";
  if (count < 4) {
    count++;
  } else {
    count = 0;
  }
}, 5000);

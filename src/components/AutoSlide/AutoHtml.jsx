import React from "react";
import AutoStyle from "./AutoStyle.css";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";
import image5 from "./images/5.jpeg";
import autoslide from "./autoslide.js";
import ReviewComponent from "../ReviewComponent/ReviewComponent";

export default function AutoHtml() {
  return (
    <section id="AutoHtml">
      <div className="SlideFrame">
        <div className="SlideContainer">
          <div className="SlideImage">
            {/* <img src={image1} /> */}
            <ReviewComponent />
          </div>
          <div className="SlideImage">
            {/* <img src={image2} /> */}
            <ReviewComponent />
          </div>
          <div className="SlideImage">
            {/* <img src={image3} /> */}
            <ReviewComponent />
          </div>
          <div className="SlideImage">
            {/* <img src={image4} /> */}
            <ReviewComponent />
          </div>
          <div className="SlideImage">
            {/* <img src={image5} /> */}
            <ReviewComponent />
          </div>
        </div>
      </div>
      <p id="demo"></p>
    </section>
  );
}
let count = 0;
let timeout = setInterval(() => {
  document.getElementsByClassName("SlideContainer")[0].style.left =
    -(360 * count) + "px";
  if (count < 4) {
    count++;
  } else {
    count = 0;
  }
}, 5000);

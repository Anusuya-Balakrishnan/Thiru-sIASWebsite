import React, { useState } from "react";
import upscimage from "./images/UPSC2.avif";
import LandingStyle from "./LandingStyle.css";
import ReviewComponent from "../ReviewComponent/ReviewComponent.jsx";
import Button from "../Button/ButtonHtml.jsx";
import AutoHtml from "../AutoSlide/AutoHtml";
import SmallAutoSlide from "../AutoSlide/SmallAutoSlide/SmallAutoSlide.jsx";
import person1 from "./images/4.jpeg";
import SmallButton from "../Button/SmallButton/SmallButton";
import parliament from "./images/parliament.jpg";
import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const [displayWidth, setDisplayWidth] = useState(document.body.clientWidth);
  window.addEventListener("resize", () => {
    setDisplayWidth(document.body.clientWidth);
  });
  var navigate = useNavigate();
  return (
    <section id="LandingPage">
      <div className="LandingPageMain">
        <div className="LandingPageParent">
          <div className="UpscImage">
            <img src={parliament} />
          </div>
          <div className="UpscContent">
            <div className="UpscHeading">
              <h1>Thiru's IAS Academy</h1>
              <p>
                Only result-oriented IAS Academy in Puducherry. Our candidate
                Shri. M. Barani, had cleared UPSC civil services exam 2019 by
                securing All India Rank 326. The Next can be you!! Reach your
                dream from our hometown.
              </p>
              <div
                className="LandingButton"
                
              >
                <div onClick={() => {
                  navigate("/about");
                }}>
                  <SmallButton value="For More" />
                  </div>
              </div>
            </div>
            <div className="UpscReview">
              {displayWidth < 500 ? <SmallAutoSlide /> : <AutoHtml />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div style={{ height: 300, width: 400, background: "#fff" }}>
                  Width = {displayWidth}
                </div> */
}

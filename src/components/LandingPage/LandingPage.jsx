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
export default function LandingPage() {
  const [displayWidth, setDisplayWidth] = useState(document.body.clientWidth);
  window.addEventListener("resize", () => {
    setDisplayWidth(document.body.clientWidth);
  });

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                amet, lobortis habitant dolor consequat. Adipiscing a in sociis
                enim, posuere ac Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ornare amet, lobortis habitant dolor consequat.
                Adipiscing a in sociis enim, posuere ac.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ornare amet, lobortis
                habitant dolor consequat. Adipiscing a in sociis enim, posuere
                ac.
              </p>
              <div className="LandingButton">
                <SmallButton value="Enroll" />
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

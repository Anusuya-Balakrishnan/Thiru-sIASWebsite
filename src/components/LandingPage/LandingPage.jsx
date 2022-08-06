import React from "react";
import upscimage from "./images/UPSC2.avif";
import LandingStyle from "./LandingStyle.css";
import ReviewComponent from "../ReviewComponent/ReviewComponent.jsx";
import Button from "../Button/ButtonHtml.jsx";

export default function LandingPage() {
  return (
    <section id="LandingPage">
      <div className="LandingPageParent">
        <div className="UpscImage"></div>
        <div className="UpscContent">
          <div className="UpscHeading">
            <h1>Thiru's IAS Academy</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              amet, lobortis habitant dolor consequat. Adipiscing a in sociis
              enim, posuere ac.
            </p>
            <div className="ButtonDiv">
              <Button name="Enroll" />
            </div>
          </div>
          <div className="UpscReview"></div>
        </div>
      </div>
    </section>
  );
}

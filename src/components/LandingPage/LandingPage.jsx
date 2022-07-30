import React from "react";
import upscimage from "./images/UPSC2.avif";
export default function LandingPage() {
  return (
    <section id="LandingPage">
      <div className="LandingPageParent">
        <div className="UpscImage">
          <img src={upscimage} />
        </div>
      </div>
    </section>
  );
}

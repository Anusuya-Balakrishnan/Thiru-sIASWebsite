import React, { useState } from "react";
import SeminarStyle from "./SeminarStyle.css";
import SeminarHtml from "./SeminarHtml";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";
import image5 from "./image/5.jpg";
export default function SeminarSlide() {
  let count = 0;
  let leftValue = 0;
  setInterval(() => {
    let containerWidth = document.querySelector(
      ".SeminarSlideContainer"
    ).clientWidth;
    let maxWidth = document.querySelector(".SeminarSlideParent").clientWidth;
    if (leftValue < maxWidth - containerWidth) {
      leftValue = containerWidth * count;
      count += 1;
    } else {
      count = 0;
      leftValue = 0;
    }
    // console.log("leftValue", leftValue);
    document.querySelector(".SeminarSlideParent").style.left =
      -leftValue + "px";
  }, 8000);
  return (
    <section id="SeminarSlidePage">
      <div className="SeminarContainerParent">
        <div className="SeminarSlideContainer">
          <div className="SeminarSlideParent">
            <div className="EachSlide">
              <SeminarHtml
                image={image1}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="Pondicherry University"
                time=" 12/8/2022, Friday"
              />
            </div>
            {/* <div className="EachSlide">
              <SeminarHtml
                image={image2}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div>
            <div className="EachSlide">
              <SeminarHtml
                image={image3}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div>
            <div className="EachSlide">
              <SeminarHtml
                image={image4}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div>
            <div className="EachSlide">
              <SeminarHtml
                image={image5}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

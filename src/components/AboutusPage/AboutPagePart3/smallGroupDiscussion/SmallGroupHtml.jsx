import React, { useState } from "react";
import SmallGroupStyle from "./SmallGroupStyle.css";
import infra1 from "../image/infrastructure1.jpeg";
import infra2 from "../image/infrastructure2.jpeg";
import infra3 from "../image/infrastructure3.jpeg";
import infra4 from "../image/infrastructure4.jpeg";
import infra5 from "../image/infrastructure5.jpeg";
import infra6 from "../image/infrastructure6.jpeg";
import infra7 from "../image/infrastructure7.jpeg";
import infra8 from "../image/infrastructure8.jpeg";
import SmallGroupSlide from "./SmallGroupSlide";
import {
  BsFillArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";

let galleryContent = [
  { title: "Group Discussion", image: infra1 },
  { title: "Current Affairs Discussion", image: infra2 },
  { title: "Current Affairs Debate", image: infra3 },
  { title: "Group Discussion", image: infra4 },
  { title: "Current Affairs Discussion", image: infra5 },
  { title: "Current Affairs Debate", image: infra6 },
  { title: "Group Discussion", image: infra7 },
  { title: "Current Affairs Discussion", image: infra8 },
];
export default function SmallGroupHtml() {
  const [widthValue, setwidthValue] = useState(0);
  function LeftClick() {
    let eachWidth = document.querySelector(".EachSmallGroupSlide").clientWidth;
    let totalWidth = document.querySelector(".SmallSlideContainer").clientWidth;
    let totalWidthValue = totalWidth - eachWidth;
    if (Math.abs(widthValue) < totalWidthValue) {
      setwidthValue(widthValue - eachWidth);
    } else {
      setwidthValue(0);
    }
    console.log(widthValue);
  }

  function rightClick() {
    let eachWidth = document.querySelector(".EachSmallGroupSlide").clientWidth;
    let totalWidth = document.querySelector(".SmallSlideContainer").clientWidth;
    let totalWidthValue = totalWidth - eachWidth;
    if (widthValue < 0 && widthValue >= -totalWidthValue) {
      setwidthValue(widthValue + eachWidth);
    } else {
      setwidthValue(-totalWidthValue);
    }
    console.log(widthValue);
  }
  return (
    <section id="SmallGroupHtml">
      <div className="SGDContainer">
        <div className="GroupSlideLeft" onClick={LeftClick}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className="SmallGroupSlideFrame">
          <div
            className="SmallSlideContainer"
            style={{ left: widthValue + "px" }}
          >
            {galleryContent.map((each, index) => {
              return (
                <div className="EachSmallGroupSlide" key={index}>
                  <SmallGroupSlide title={each.title} image={each.image} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="GroupSlideRight" onClick={rightClick}>
          <BsArrowRightCircleFill />
        </div>
      </div>
    </section>
  );
}

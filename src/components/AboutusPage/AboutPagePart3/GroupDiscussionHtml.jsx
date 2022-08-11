import React, { useState } from "react";
import { GroupDiscussionStyle } from "./GroupDiscussionStyle.css";
import infra1 from "./image/infrastructure1.jpeg";
import infra2 from "./image/infrastructure2.jpeg";
import infra3 from "./image/infrastructure3.jpeg";
import infra4 from "./image/infrastructure4.jpeg";
import infra5 from "./image/infrastructure5.jpeg";
import infra6 from "./image/infrastructure6.jpeg";
import infra7 from "./image/infrastructure7.jpeg";
import infra8 from "./image/infrastructure8.jpeg";
import GroupEachSlide from "./GroupEachSlide";
import {
  BsFillArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from "react-icons/bs";
export default function GroupDiscussionHtml() {
  const [containerLeft, setContainerLeft] = useState(0);
  const [leftCount, setLeftCount] = useState(1);
  const [rightCount, setRightCount] = useState(1);
  function LeftClick() {
    let framewidth = document.querySelector(".GroupSlideFrame").clientWidth;
    let maxWidth = framewidth * 3;
    if (containerLeft < maxWidth) {
      setContainerLeft(leftCount * framewidth);
      setLeftCount(leftCount + 1);
    } else {
      setLeftCount(1);
      setContainerLeft(0);
    }
    document.querySelector(".GroupContainer").style.left =
      -containerLeft + "px";
  }
  function RightClick() {
    let framewidth = document.querySelector(".GroupSlideFrame").clientWidth;
    let leftValue = document.querySelector(".GroupContainer").style.left;
    let maxWidth = framewidth * 3;
    let leftIntegerValue = leftValue.slice(0, leftValue.length - 2);
    if (leftIntegerValue === 0) {
      setContainerLeft(maxWidth * -1);
    }

    // if (leftIntegerValue != 0) {
    //   let temp = framewidth * rightCount;
    //   setContainerLeft(leftIntegerValue + temp);

    //   setRightCount(rightCount + 1);
    // } else {

    //   setRightCount(0);
    // }
    document.querySelector(".GroupContainer").style.left = containerLeft + "px";
  }
  return (
    <section id="GroupDiscussionPage">
      <div className="GroupSlideFrameParent">
        <div className="GroupSlideLeft" onClick={LeftClick}>
          <BsFillArrowLeftCircleFill />
        </div>
        <div className="GroupSlideFrame">
          <div className="GroupContainer">
            <GroupEachSlide
              title="Group Discussion"
              image1={infra1}
              image2={infra2}
            />
            <GroupEachSlide
              title="Group Discussion"
              image1={infra3}
              image2={infra4}
            />
            <GroupEachSlide
              title="Group Discussion"
              image1={infra5}
              image2={infra6}
            />
            <GroupEachSlide
              title="Group Discussion"
              image1={infra7}
              image2={infra8}
            />
          </div>
        </div>
        <div className="GroupSlideRight" onClick={RightClick}>
          <BsArrowRightCircleFill />
        </div>
      </div>
    </section>
  );
}

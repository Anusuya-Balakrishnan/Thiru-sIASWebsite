import React, { useRef, useState, useEffect } from "react";
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
  const [widthValue, setwidthValue] = useState(0);
  function LeftClick() {
    let eachWidth = document.querySelector(".GroupSlideContainer").clientWidth;
    let totalWidth = document.querySelector(".GroupContainer").clientWidth;
    let totalWidthValue = totalWidth - eachWidth;
    if (Math.abs(widthValue) < totalWidthValue) {
      setwidthValue(widthValue - eachWidth);
    } else {
      setwidthValue(0);
    }
  }
  function rightClick() {
    let eachWidth = document.querySelector(".GroupSlideContainer").clientWidth;
    let totalWidth = document.querySelector(".GroupContainer").clientWidth;
    let totalWidthValue = totalWidth - eachWidth;
    if (widthValue < 0 && widthValue >= -totalWidthValue) {
      setwidthValue(widthValue + eachWidth);
    } else {
      setwidthValue(-totalWidthValue);
    }
  }

  let outer = useRef(null);
  let inner = useRef(null);
  let pressed = false;
  let startx;
  let x;

  function mouseDown(e) {
    pressed = true;
    startx = e.nativeEvent.offsetX - inner.current.offsetLeft;
    outer.current.style.cursor = "grabbing";
  }
  function mouseUp() {
    outer.current.style.cursor = "grab";
  }

  useEffect(() => {
    window.addEventListener("mouseup", () => {
      pressed = false;
      outer.current.style.cursor = "grab";
    });
  });
  function mouseMove(e) {
    if (!pressed) return;
    e.preventDefault();
    x = e.nativeEvent.offsetX;
    inner.current.style.left = `${x - startx}px`;
    checkedBorder();
  }
  function checkedBorder() {
    let outerRect = outer.current.getBoundingClientRect();
    let innerRect = inner.current.getBoundingClientRect();
    if (parseInt(inner.current.style.left) > 0) {
      inner.current.style.left = "0px";
    } else if (innerRect.right < outerRect.right) {
      inner.current.style.left = `-${innerRect.width - outerRect.width}px`;
    }
  }

  return (
    <section id="GroupDiscussionPage">
      <div className="GroupDiscussionParent">
        <div className="GroupSlideLeft" onClick={LeftClick}>
          <BsFillArrowLeftCircleFill />
        </div>

        <div className="GroupSlideFrameParent">
          <div
            className="GroupSlideFrame"
            ref={outer}
            onMouseDown={(e) => {
              mouseDown(e);
            }}
            onMouseUp={mouseUp}
            onMouseMove={(e) => {
              mouseMove(e);
            }}
          >
            <div
              className="GroupContainer"
              style={{ left: widthValue + "px" }}
              ref={inner}
            >
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
        </div>

        <div className="GroupSlideRight" onClick={rightClick}>
          <BsArrowRightCircleFill />
        </div>
      </div>
    </section>
  );
}

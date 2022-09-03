import React from "react";
import SmallReviewStyle from "./SmallReviewStyle.css";
import { FcGoogle } from "react-icons/fc";
import { AiTwotoneStar } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useRef } from "react";
import { useEffect } from "react";
export default function SmallReview(props) {
  let smallReviewContainerRef = useRef(0);
  let smallReviewContentRef = useRef(0);
  let innerValue = smallReviewContentRef.current.innerHTML;
  useEffect(() => {
    if (props.para3 !== "" && props.para4 !== "") {
      document.getElementsByClassName("SeeMorebtnParent")[0].style.display =
        "block";
    }
  }, []);
  function showFullReview() {
    document.getElementsByClassName("SeeMorebtnParent")[0].style.display =
      "none";
    smallReviewContainerRef.current.height = "600px";
    innerValue += props.para3 + props.para4;
  }
  return (
    <section id="SmallReviewStyle">
      <div className="smallReviewContainer" ref={smallReviewContainerRef}>
        <div className="smallReviewTitle">
          <div className="smallPersonImage">
            <img src={props.image} alt="person image" />
          </div>
          <div className="smallPersonName">
            <p className="smallName">{props.name}</p>
            <div className="smallReviewStar">
              <AiTwotoneStar color="#4D89F7" />
              <AiTwotoneStar color="#4D89F7" />
              <AiTwotoneStar color="#4D89F7" />
              <AiTwotoneStar color="#4D89F7" />
              <AiTwotoneStar color="#4D89F7" />
            </div>
            <p className="smallTime">{props.duration}</p>
          </div>
          <div className="smallgoogleIcon">
            <FcGoogle />
          </div>
        </div>
        <div className="smallReviewContent">
          <p ref={smallReviewContentRef}>
            {props.para1}
            {props.para2}
          </p>
        </div>
        <div className="SeeMorebtnParent" onClick={showFullReview}>
          <div className="SeeMorebtn">
            <FiChevronDown />
          </div>
        </div>
      </div>
    </section>
  );
}

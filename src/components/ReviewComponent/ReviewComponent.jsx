import React from "react";
import ReviewStyle from "./ReviewStyle.css";
import { FcGoogle } from "react-icons/fc";
import { AiTwotoneStar } from "react-icons/ai";

export default function ReviewComponent(props) {
  return (
    <section id="ReviewComponent">
      <div className="ReviewParent">
        <div className="ReviewTitle">
          <div className="PersonImage">
            <img src={props.image} alt="person image" />
          </div>
          <div className="PersonName">
            <p className="Name">
              <span>{props.name}</span>
              <div className="ReviewStar">
                <AiTwotoneStar color="#4D89F7" />
                <AiTwotoneStar color="#4D89F7" />
                <AiTwotoneStar color="#4D89F7" />
                <AiTwotoneStar color="#4D89F7" />
                <AiTwotoneStar color="#4D89F7" />
              </div>
            </p>
            <p className="time">{props.duration}</p>
          </div>
          <div className="googleIcon">
            <FcGoogle />
          </div>
        </div>
        <div className="ReviewBody">
          <p>{props.para1}</p>
          <br />
          <p>{props.para2}</p>
          <br />
          <p>{props.para3}</p>
          <br />
          <p>{props.para4}</p> <br />
          <p>{props.para5}</p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { GroupDiscussionStyle } from "./GroupDiscussionStyle.css";
export default function GroupEachSlide(props) {
  return (
    <div className="GroupDiscussionParent">
      <div className="GroupDiscussionTitle">{props.title}</div>
      <div className="GroupSlideContainer">
        <div className="GroupSlide">
          <img src={props.image1} />
        </div>
        <div className="GroupSlide">
          <img src={props.image2} />
        </div>
      </div>
    </div>
  );
}

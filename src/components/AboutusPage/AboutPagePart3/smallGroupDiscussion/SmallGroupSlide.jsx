import React from "react";
import SmallGroupStyle from "./SmallGroupStyle.css";

export default function SmallGroupSlide(props) {
  return (
    <section id="SmallGroupSlide">
      <div className="SmallGroupDiscussionContainer">
        <div className="SmallGroupTitle">{props.title}</div>
        <div className="SmallGroupImage">
          <img src={props.image} />
        </div>
      </div>
    </section>
  );
}

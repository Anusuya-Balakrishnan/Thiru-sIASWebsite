import React from "react";
import SmallSlideStyle from "./SmallSlideStyle.css";
export default function Slide(props) {
  return (
    <section className="SmallSeminarParent">
      <div className="SmallSeminarFrame">
        <div className="SmallSeminarImage">
          <img src={props.image} />
        </div>
        <div className="SmallSeminarContent">
          <div className="SmallSeminarTitle">Title: {props.title}</div>
          <div className="SmallSeminarDetail">{props.details}</div>
          <div className="SmallSeminarDate">
            Place: {props.place}
            <br />
            Time:{props.time}
          </div>
        </div>
      </div>
    </section>
  );
}

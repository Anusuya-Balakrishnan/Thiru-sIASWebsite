import React from "react";
import ReviewStyle from "./ReviewStyle.css";
import person1 from "./images/person1.jpg";
import { AiTwotoneStar } from "react-icons/ai";

export default function ReviewComponent() {
  return (
    <section id="ReviewComponent">
      <div className="ReviewParent">
        <div className="ReviewTitle">
          <div className="PersonImage">
            <img src={person1} alt="person image" />
          </div>
          <div className="PersonName">
            <p className="Name">
              <span>Kavitha C</span> (Google Review)
            </p>
            <p className="time">5 month ago</p>
          </div>
          <div className="ReviewStar">
            <AiTwotoneStar color="#E8AB08" />
            <AiTwotoneStar color="#E8AB08" />
            <AiTwotoneStar color="#E8AB08" />
            <AiTwotoneStar color="#E8AB08" />
            <AiTwotoneStar color="#E8AB08" />
          </div>
        </div>
        <div className="ReviewBody">
          <p>
            Good Academy for UPSC and for other Competetive exams too.
            Individual concern is given for each and every aspirant.
            <p />
            <br />
            <p>
              Classes are taken from basic levels and we can experience a
              difference in learning(i.e. learning by understanding, analysing,
              applying)when compared to schools where we were made to memorize
              things.
              <p />
              <br />
              <p>
                Sir motivates and lays path for a colourful future. He
                encourages students to have a healthy discussion on various
                topics, current affairs which provides opportunity to explore
                our knowledge.
              </p>
              <br />
              <p>Best Institute for cracking the exams.</p> <br />
              Thank you Sir.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}

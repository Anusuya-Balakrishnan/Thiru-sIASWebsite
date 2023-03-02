import React from "react";
import SeminarStyle from "./SeminarStyle.css";

export default function SeminarHtml(props) {
  return (
    <section id="SeminarHtmlPage">
      <div className="SeminarMainParent">
        <div className="SeminarParent">
          <div className="SeminarImage">
            <img src={props.image} />
          </div>
          <div className="SeminarContent">
            <div className="SeminarTitle"
             
            >Title: {props.title}</div>
            <div className="SeminarDetail"
             style={{
                display:props.details=="" && "none"
              }}>{props.details}</div>
            <div className="SeminarDate">
              Place: {props.place}
              <br />
              Time:{props.time}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

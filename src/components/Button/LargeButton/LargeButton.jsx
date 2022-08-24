import React from "react";
import LargeButtonStyle from "./LargeButtonStyle.css";
import { VscArrowRight } from "react-icons/vsc";
export default function LargeButton(props) {
  return (
    <section id="LargeButton">
      <div className="LargeButtonParent">
        <p>{props.value}</p>
        <VscArrowRight />
      </div>
    </section>
  );
}

import React from "react";
import SmallButtonStyle from "./SmallButtonStyle.css";
import { VscArrowRight } from "react-icons/vsc";

export default function SmallButton(props) {
  return (
    <section id="SmallButtonPage">
      <div className="SmallButtonParent">
        <p>{props.value}</p>

        <VscArrowRight />
      </div>
    </section>
  );
}

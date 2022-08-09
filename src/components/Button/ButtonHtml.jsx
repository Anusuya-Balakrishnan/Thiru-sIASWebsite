import React from "react";
import ButtonStyle from "./ButtonStyle.css";
import { VscArrowRight } from "react-icons/vsc";
let width;

export default function Button(props) {
  return (
    <section id="ButtonParent">
      <div className="ButtonMain">
        <p>{props.name}</p>
        <div className="ButtonIcon">
          <VscArrowRight />
        </div>
      </div>
    </section>
  );
}

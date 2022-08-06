import React from "react";
import ButtonStyle from "./ButtonStyle.css";
import { FaAngleDoubleRight } from "react-icons/fa";
let width;

export default function Button(props) {
  return (
    <section id="ButtonParent">
      <div className="ButtonMain">
        <p>{props.name}</p>
        <FaAngleDoubleRight />
      </div>
    </section>
  );
}

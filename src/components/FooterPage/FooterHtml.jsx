import React from "react";
import logoimage from "./images/Logo.svg";
import { FaList } from "react-icons/fa";
import FooterStyle from "./FooterStyle.css";

export default function FooterHtml() {
  return (
    <section id="FooterPage">
      <div className="FooterParent">
        <div className="FooterContent">
          <img src={logoimage} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
            amet, lobortis habitant dolor consequat. Adipiscing a in sociis
            enim, posuere ac.
          </p>
        </div>
        <div className="FooterList">
          <p>Contact</p>
          <p>Courses</p>
          <p>FAQ</p>
          <p>About us</p>
        </div>
        <div className="FooterAddress"></div>
      </div>
    </section>
  );
}

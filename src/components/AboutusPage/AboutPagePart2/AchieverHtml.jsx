import React from "react";
import AchieverStyle from "./AchieverStyle.css";
import bharaniimage from "./image/bharaniimage.jpg";

export default function AchieverHtml() {
  return (
    <section id="AboutAchiever">
      <div className="AchieverParent">
        <div className="AchieverTitle">UPSC Achiever</div>
        <div className="AchieverDetails">
          <div className="AchieverImage">
            <img src={bharaniimage} />
          </div>
          <div className="AchieverContent">
            <div className="AchieverName">Bharani.M</div>
            <div className="AchieverRank">UPSC AIR-326 (2019 Batch)</div>
            <div className="AchieverDescription">Deputy Director in Delhi</div>
            <div className="AchieverCurrentDetails">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              egestas in tincidunt sed feugiat sagittis, pretium vel. Facilisi
              ullamcorper facilisi bibendum justo, aliquam ornare quis. Aliquet
              vulputate turpis donec feugiat erat eu tempor volutpat.Facilisi
              ullamcorper facilisi bibendum justo, aliquam ornare quis. Aliquet
              vulputate turpis donec feugiat erat eu tempor volutpat.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

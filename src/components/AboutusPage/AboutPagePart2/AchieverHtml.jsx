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
              "Pride of Thiru's IAS Academy". Shri. M. Bharani, deputy director
              in Delhi, is a role model for all aspirants. Bharani was an
              engineering background student who had an 8 hours job during his
              preparation. With all his efforts and proper guidance from our
              founder, he achieved his dream.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

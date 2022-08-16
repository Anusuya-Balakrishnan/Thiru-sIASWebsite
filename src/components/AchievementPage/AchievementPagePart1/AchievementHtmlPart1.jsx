import React from "react";
import AchievementStylePart1 from "./AchievementStylePart1.css";
import AchieverHtml from "../../AboutusPage/AboutPagePart2/AchieverHtml";
import bharaniImage from "./image/bharaniImage.jpg";

export default function AchievementPagePart1() {
  return (
    <section id="AchievementPagePart1">
      <div className="AchievementPageParent">
        <div className="UPSCAchieverTitle">UPSC Exam Achiever:</div>
        <div className="UPSCAchieverDetails">
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
          <div className="AchieverImage">
            <img src={bharaniImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

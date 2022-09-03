import React, { useState } from "react";
import HomePage from "../HomePage/HomePage";
import FooterHtml from "../FooterPage/FooterHtml";
import AchievementPagePart1 from "./AchievementPagePart1/AchievementHtmlPart1";
import RegionalExamHtml from "./AchievementPagePart2/RegionalExamHtml";
import SeminarSlide from "./SeminarSlide/SeminarSlide";
import SmallSlideHtml from "./SeminarSlide/SmallSeminarSlide/SmallSlideHtml";
export default function AchievementHtmlPage() {
  const [displayWidth, setDisplayWidth] = useState(document.body.clientWidth);
  window.addEventListener("resize", () => {
    setDisplayWidth(document.body.clientWidth);
  });
  return (
    <section id="AchievementHtmlPage">
      <AchievementPagePart1 />
      <RegionalExamHtml />
      {displayWidth < 750 ? <SmallSlideHtml /> : <SeminarSlide />}
    </section>
  );
}

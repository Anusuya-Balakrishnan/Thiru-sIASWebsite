import React from "react";
import HomePage from "../HomePage/HomePage";
import FooterHtml from "../FooterPage/FooterHtml";
import AchievementPagePart1 from "./AchievementPagePart1/AchievementHtmlPart1";
import RegionalExamHtml from "./AchievementPagePart2/RegionalExamHtml";
import SeminarSlide from "./SeminarSlide/SeminarSlide";
export default function AchievementHtmlPage() {
  return (
    <section id="AchievementHtmlPage">
      <HomePage />
      <AchievementPagePart1 />
      <RegionalExamHtml />
      {/* <SeminarSlide /> */}
      <FooterHtml />
    </section>
  );
}

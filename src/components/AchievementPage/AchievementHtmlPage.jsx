import React from "react";
import HomePage from "../HomePage/HomePage";
import FooterHtml from "../FooterPage/FooterHtml";
import AchievementPagePart1 from "./AchievementPagePart1/AchievementHtmlPart1";
export default function AchievementHtmlPage() {
  return (
    <section id="AchievementHtmlPage">
      <HomePage />
      <AchievementPagePart1 />
      <FooterHtml />
    </section>
  );
}

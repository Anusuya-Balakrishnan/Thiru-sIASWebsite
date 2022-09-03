import React from "react";
import AboutUsHtml from "../AboutusPage/AboutPagePart1/AboutUsHtml";
import HomePage from "../HomePage/HomePage";
import AchieverHtml from "../AboutusPage/AboutPagePart2/AchieverHtml";
import FooterHtml from "../FooterPage/FooterHtml";
import image1 from "./image/infrastructure1.jpeg";
import GroupDiscussionHtml from "../AboutusPage/AboutPagePart3/GroupDiscussionHtml";
import SmallGroupHtml from "../AboutusPage/AboutPagePart3/smallGroupDiscussion/SmallGroupHtml";
import { useState } from "react";
export default function SecondPageHtml() {
  const [displayWidth, setDisplayWidth] = useState(document.body.clientWidth);
  window.addEventListener("resize", () => {
    setDisplayWidth(document.body.clientWidth);
  });
  return (
    <section id="SecondPageHtml">
      <AboutUsHtml />
      <AchieverHtml />
      {displayWidth < 900 ? <SmallGroupHtml /> : <GroupDiscussionHtml />}
    </section>
  );
}

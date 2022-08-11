import React from "react";
import AboutUsHtml from "../AboutusPage/AboutPagePart1/AboutUsHtml";
import HomePage from "../HomePage/HomePage";
import AchieverHtml from "../AboutusPage/AboutPagePart2/AchieverHtml";
import FooterHtml from "../FooterPage/FooterHtml";
import GroupDiscussionHtml from "../AboutusPage/AboutPagePart3/GroupDiscussionHtml";
export default function SecondPageHtml() {
  return (
    <section id="SecondPageHtml">
      <HomePage />
      <AboutUsHtml />
      <AchieverHtml />
      <GroupDiscussionHtml />
      <FooterHtml />
    </section>
  );
}

import React from "react";
import AboutUsHtml from "../AboutusPage/AboutPagePart1/AboutUsHtml";
import HomePage from "../HomePage/HomePage";
import FooterHtml from "../FooterPage/FooterHtml";
export default function SecondPageHtml() {
  return (
    <section id="SecondPageHtml">
      <HomePage />
      <AboutUsHtml />
      {/* <FooterHtml /> */}
    </section>
  );
}

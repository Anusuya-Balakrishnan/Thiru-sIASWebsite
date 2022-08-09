import React from "react";
import AboutUsHtml from "../AboutusPage/AboutUsHtml";
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

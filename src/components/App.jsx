import React from "react";
import HomePage from "./HomePage/HomePage.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import FooterHtml from "./FooterPage/FooterHtml";
import PopupPage from "./PopupPage/PopupHtml.jsx";
import ReviewComponent from "./ReviewComponent/ReviewComponent.jsx";
import Course from "./Course/CourseHtml.jsx";
import AutoHtml from "./AutoSlide/AutoHtml.jsx";
export default function App() {
  return (
    <section id="App">
      <AutoHtml />
      {/* <PopupPage /> */}
      {/* <HomePage />
      <LandingPage />
      <Course /> */}
      {/* <FooterHtml /> */}
      {/* <ReviewComponent /> */}
    </section>
  );
}

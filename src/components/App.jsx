import React from "react";
import HomePage from "./HomePage/HomePage.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import FooterHtml from "./FooterPage/FooterHtml";
import PopupPage from "./PopupPage/PopupHtml.jsx";
import ReviewComponent from "./ReviewComponent/ReviewComponent.jsx";
import Course from "./Course/CourseHtml.jsx";
import JourneyHtml from "./Journey/JourneyHtml.jsx";
import CourseSlideHtml from "./CourseSlide/CourseSlideHtml.jsx";
export default function App() {
  return (
    <section id="App">
      {/* <PopupPage /> */}
      <HomePage />
      <LandingPage />
      <JourneyHtml />
      {/* <Course /> */}
      <CourseSlideHtml />
      <FooterHtml />
      {/* <ReviewComponent /> */}
    </section>
  );
}

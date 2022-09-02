import React from "react";
import HomePage from "../HomePage/HomePage";
import FooterHtml from "../FooterPage/FooterHtml";
import LandingPage from "../LandingPage/LandingPage";
import JourneyHtml from "../Journey/JourneyHtml";
import CourseSlideHtml from "../CourseSlide/CourseSlideHtml";
import SmallReview from "../ReviewComponent/SmallReview";

export default function FirstPageHtml() {
  return (
    <section id="FirstPage">
      <div className="FistPage">
        <LandingPage />
        <JourneyHtml />
        <CourseSlideHtml />
        <SmallReview />
      </div>
    </section>
  );
}

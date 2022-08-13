import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPageHtml from "./FirstPage/FirstPageHtml";
import SecondPageHtml from "./SecondPage/SecondPageHtml";
import AchievementHtmlPage from "./AchievementPage/AchievementHtmlPage";
import PopupPage from "./PopupPage/PopupHtml";
import CourseOption from "./CourseOption/CourseOption";
import UPSC from "./CourseOption/UPSCCourse/UPSC";
import RegionalExamPage from "./CourseOption/RegionalExam/RegionalExam";
import SpokenEnglishPage from "./CourseOption/SpokenEnglishCourse/SpokenEnglish";
import PageNotFound from "./404/PageNotFound";
import HomePage from "./HomePage/HomePage";
export default function App() {
  return (
    <>
      {/* <HomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPageHtml />} />
          <Route path="/about" element={<SecondPageHtml />} />
          <Route path="/achievement" element={<AchievementHtmlPage />} />
          <Route path="/course/upsc" element={<UPSC />} />
          <Route path="/course/regionalExam" element={<RegionalExamPage />} />
          <Route path="/course/spokenEnglish" element={<SpokenEnglishPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* <FirstPageHtml />
        <SecondPageHtml />
        <AchievementHtmlPage />
        <CourseOption />
        <PopupPage /> */}
      </BrowserRouter>
    </>
  );
}

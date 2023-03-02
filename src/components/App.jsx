import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPageHtml from "./FirstPage/FirstPageHtml";
import SecondPageHtml from "./SecondPage/SecondPageHtml";
import AchievementHtmlPage from "./AchievementPage/AchievementHtmlPage";
// import PopupPage from "./PopupPage/PopupHtml";
// import CourseOption from "./CourseOption/CourseOption";
import UPSC from "./CourseOption/UPSCCourse/UPSC";
import RegionalExamPage from "./CourseOption/RegionalExam/RegionalExam";
import SpokenEnglishPage from "./CourseOption/SpokenEnglishCourse/SpokenEnglish";
import PageNotFound from "./404/PageNotFound";
import HomePage from "./HomePage/HomePage";
// import ContactPage from "./ContactPage/ContactPageHtml";
import ContactPageHtml from "./ContactPage/ContactPageMain";
import FooterHtml from "./FooterPage/FooterHtml";
import PopupPage from "./PopupPage/PopupHtml";
import SyllabusHTML from "./SyllabusPage/SyllabusHTML";
import syllabusList from "../../src/components/SyllabusPage/syllabusContent";
import { useEffect } from "react";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
// import { ScrollRestoration } from "react-router-dom";
// import ScrollToTop from "react-scroll-to-top";
export default function App() {


  return (
    
    <>
      <BrowserRouter>
        <main>
          <HomePage />
          <ScrollToTop />
          <PopupPage />
          <Routes>
            <Route path="/" element={<FirstPageHtml />} />
            <Route path="/about" element={<SecondPageHtml />} />
            <Route path="/achievement" element={<AchievementHtmlPage />} />
            <Route path="/course/upsc" element={<UPSC />} />
            <Route path="/course/regionalExam" element={<RegionalExamPage />} />
            <Route
              path="/course/spokenEnglish"
              element={<SpokenEnglishPage />}
            />
            <Route path="/contactus" element={<ContactPageHtml />} />
            <Route path="/syllabus/:id" element={<SyllabusHTML />} />
            <Route path="/syllabus/:id" element={<SyllabusHTML />} />
          </Routes>
          
          <FooterHtml />
        </main>
      </BrowserRouter>
    </>
  );
}
{
  /* <FirstPageHtml />
  
        <SecondPageHtml />
        <AchievementHtmlPage />
        <CourseOption />
        <PopupPage /> */
}

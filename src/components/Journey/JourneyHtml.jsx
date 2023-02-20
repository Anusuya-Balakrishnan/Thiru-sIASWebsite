import React, { useState } from "react";
import JourneyStyle from "./JourneyStyle.css";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
// import {}
// import { GrWorkshop } from "react-icons/g";
import image1 from "./image/image1.jpeg";
import founder from "./image/founder.jpeg";

export default function JourneyHtml() {
  const [height, setHeight] = useState(false);
  function increaseHeight() {
    if (!height) {
      document.querySelector(".journey_content_seminar_block p").style.height =
        "auto";
      console.log(
        document.querySelector(".journey_content_seminar_block p").style.height
      );
      setHeight(!height);
    } else {
      document.querySelector(".journey_content_seminar_block p").style.height =
        "200px";

      console.log(
        document.querySelector(".journey_content_seminar_block p").style.height
      );
      setHeight(!height);
    }
  }
  return (
    <section id="JourneyPage">
      <div className="JourneyParent">
        <div className="JourneyPart1">
          <div className="JContent1">
            <h1>Our Journey</h1>
            <div className="JourneyImage"><img  src={founder} alt="founder image" /></div>
            <p>
              THIRU'S IAS ACADEMY, Muthialpet, Puducherry.This Institution,
              Thiru's IAS Academy was founded by Shri. S .Thirumurugan in the
              year 2016.The only aim of the institution is to provide guidance
              and knowledge to the aspirants about the Civil service
              examination.We provide coaching for UPSC (IAS, IPS, IRS, etc),
              TNPSC, RRB, SSC, UDC, LDC, CUET, and Professional Communication.
              
            </p>
            <p>
              Our Founder, Shri. S. Thirumurugan is also an alumnus of the
              prestigious institution Puducherry Technological University
              formerly named Pondicherry Engineering College. He is a
              Pondicherry University gold medalist too in his Master's degree
              from the prestigious institution, Puducherry Technological
              University. We have trained hundreds of candidates at Thiru's IAS
              Academy. We have taken classes for IAS examination preparation at
              Pondicherry University for three consecutive years. We have
              conducted IAS awareness and competitive exam awareness sessions
              for various institutions. And the prestigious institutions are
              Pondicherry Engineering College, Sri Venkateswara College of
              Engineering and Technology, St. Joseph College of Arts and
              Science, Pondicherry University, RAAK College of Engineering and
              Technology, Sri Sairam College of Engineering and Technology, IFET
              College of Engineering and Technology, Achariya Arts and Science.
              Mother's Matriculation Higher secondary school.
            </p>
            <p>
              Thiru's IAS Academy is honored with appreciation and awards from
              the Rotary club and various trusts for its educational excellence.
            </p>
            <p>
              We had given results in the UPSC Civil services examination in
              2019. And also Thiru's IAS Academy candidates Cleared TET,
              Puducherry jail warder examination, RRB, RRB JE, CAT, etc.
            </p>
            <p>
              From the 7th year onwards we started CUET coaching. Special
              classes on Aptitude for students going for campus placement,
              Advance English training classes to outsmart in interviews,
              presentations, and stage speaking.
            </p>
          </div>
          {/* <div className="JourneyImage">
              <img src={image1} />
            </div> */}
        </div>

        <div className="JourneyPart2">
          <div className="JourneyContent2 journey_content_seminar_block">
            <div className="GroupIcon">
              <RiTeamFill />
            </div>
            <h1>Free Seminars</h1>
            <p>
              We have conducted IAS awareness and competitive exam awareness
              sessions for various institutions. And the prestigious
              institutions are Pondicherry Engineering College, Sri Venkateswara
              College of Engineering & Technology, St. Joseph College of Arts &
              Science, Pondicherry University, RAAK College of Engineering &
              Technology, Sri Sairam College of Engineering & Technology, IFET
              College of Engineering & Technology, Achariya Arts & Science.
              Mother's Matriculation Higher secondary school.
            </p>
            <div className="increaseHeight" onClick={increaseHeight}>
              {!height ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}
            </div>
          </div>
          <div className="JourneyContent2">
            <div className="StudentIcon">
              <FaUserGraduate />
            </div>
            <h1>500+ Students</h1>
            <p>
              We trained 500+ aspirants from all over India. Our students are
              from Andhra Pradesh, Kerala, Hyderabad, Uttar Pradesh, Odisha,
              Karnataka, and Karaikal (Puducherry). And also from different
              parts of Tamilnadu - Chidambaram, Neyveli, Villupuram, and
              Cuddalore.
            </p>
          </div>
          <div className="JourneyContent2">
            <div className="GroupIcon">
              <SiGoogleclassroom />
            </div>
            <h1>Webinars</h1>
            <p>
              We had more than a hundred webinars regarding civil services
              examination in various schools and colleges from all over
              Pondicherry and Tamil Nadu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

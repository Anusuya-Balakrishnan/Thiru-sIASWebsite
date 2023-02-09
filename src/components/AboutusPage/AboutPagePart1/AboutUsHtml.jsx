import React from "react";
import AboutUsStyle from "./AboutUsStyle.css";
import founder from "./image/founder.jpeg";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
export default function AboutUsHtml() {
  return (
    <section id="AboutUsHtml">
      <div className="AboutUsMain">
        <div className="AboutContent1">
          <div className="AboutHeading">Our Vision</div>
          <div className="AboutParagraph">
            To create a knowledge society with our civil services coaching and
            make the dream possible for the weaker sections of society.
            Political, Economical, and social knowledge have to reach the
            unreached ones to create an inclusive society.
          </div>
        </div>
        <div className="FounderDetailsParent">
          <div className="FounderDetails">
            <div className="FounderPhoto">
              <div className="FounderFrame">
                <div className="Photo">
                  <img src={founder} />
                </div>
              </div>
            </div>
            <div className="FounderContent">
              <div className="FounderName">
                Mr S.Thirumurugan <span className="degree">M.Tech</span>
              </div>
              <p className="FounderTitle">Founder & Academic Head</p>
              <p className="FounderPara">
                Mr. S.Thirumurugan our honorable Founder of Thiru's IAS Academy
                was a former student and gold medalist of Puducherry
                Technological University. He worked in TATA consultancy services
                in the following years. Later he persuades his carrier as an
                Assistant professor and Deputy Placement Officer. He realized
                his dream of becoming a civil servant. Now with all his 10 years
                of teaching experience and knowledge in social science, he is
                guiding Civil service aspirants to achieve their dream. He
                conducted civil services coaching classes at Pondicherry
                University for three years from 2017 to 2019.
              </p>
              <div className="AboutIcon">
                <div className="EachAboutIcon">
                  <GrFacebookOption />
                </div>

                <div className="EachAboutIcon">
                  <AiOutlineTwitter />
                </div>

                <div className="EachAboutIcon">
                  <AiFillInstagram />
                </div>

                <div className="EachAboutIcon">
                  <ImLinkedin2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

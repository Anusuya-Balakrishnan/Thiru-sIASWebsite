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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            tellus, pharetra vitae turpis scelerisque neque. Aenean etiam
            elementum tempus velit neque ut. Eget dignissim at ultrices turpis
            eget. Enim tellus magnis consectetur etiam elit, natoque donec.
            Egestas nulla mattis enim interdum senectus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Diam tellus, pharetra vitae
            turpis scelerisque neque. Aenean etiam elementum tempus velit neque
            ut. Eget dignissim at ultrices turpis eget. Enim tellus magnis
            consectetur etiam elit, natoque donec. Egestas nulla mattis enim
            interdum senectus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                tellus, pharetra vitae turpis scelerisque neque. Aenean etiam
                elementum tempus velit neque ut. Eget dignissim at ultrices
                turpis eget. Enim tellus magnis consectetur etiam elit, natoque
                donec. Egestas nulla mattis enim interdum senectus
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

import React from "react";
import AboutUsStyle from "./AboutUsStyle.css";
import founder from "./image/founder.jpeg";
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
              <img src={founder} />
              <div className="FounderFrame">hello</div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}

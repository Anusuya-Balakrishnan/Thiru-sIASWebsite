import React from "react";
import JourneyStyle from "./JourneyStyle.css";
import { FaUserGraduate } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
// import { GrWorkshop } from "react-icons/g";
import image1 from "./image/image1.jpeg";

export default function JourneyHtml() {
  return (
    <section id="JourneyPage">
      <div className="JourneyParent">
        <div className="JourneyPart1">
          <div className="JContent1">
            <h1>Our Journey</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              lacinia cras nec felis egestas odio facilisis dolor elit. Morbi ut
              et tincidunt arcu fames quis cras. Metus id dui eu mattis tellus
              dignissim. Sed mi ut lorem aliquam.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Tristique lacinia cras nec felis
              egestas odio facilisis dolor elit. Morbi ut et tincidunt arcu
              fames quis cras. Metus id dui eu mattis tellus dignissim. Sed mi
              ut lorem aliquam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Tristique lacinia cras nec felis egestas odio
              facilisis dolor elit. Morbi ut et tincidunt arcu fames quis cras.
              Metus id dui eu mattis tellus dignissim. Sed mi ut lorem
              aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Tristique lacinia cras nec felis egestas odio facilisis dolor
              elit. Morbi ut et tincidunt arcu fames quis cras. Metus id dui eu
              mattis tellus dignissim. Sed mi ut lorem aliquam.
            </p>
          </div>
          <div className="JourneyImage">
            <img src={image1} />
          </div>
        </div>
        <div className="JourneyPart2">
          <div className="JourneyContent2">
            <div className="GroupIcon">
              <RiTeamFill />
            </div>
            <h1>Free Seminars</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              lacinia cras nec felis egestas odio facilisis dolor elit. Morbi ut
              et tincidunt arcu fames quis cras. Metus id dui eu mattis tellus
              dignissim. Sed mi ut lorem aliquam.
            </p>
          </div>
          <div className="JourneyContent2">
            <div className="StudentIcon">
              <FaUserGraduate />
            </div>
            <h1>500+ Students</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              lacinia cras nec felis egestas odio facilisis dolor elit. Morbi ut
              et tincidunt arcu fames quis cras. Metus id dui eu mattis tellus
              dignissim. Sed mi ut lorem aliquam.
            </p>
          </div>
          <div className="JourneyContent2">
            <div className="GroupIcon">
              <RiTeamFill />
            </div>
            <h1>Free Seminars</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              lacinia cras nec felis egestas odio facilisis dolor elit. Morbi ut
              et tincidunt arcu fames quis cras. Metus id dui eu mattis tellus
              dignissim. Sed mi ut lorem aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

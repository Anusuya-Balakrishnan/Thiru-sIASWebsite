import React, { useEffect, useState } from "react";
import SeminarStyle from "./SeminarStyle.css";
import SeminarHtml from "./SeminarHtml";
import Slide from "./SmallSeminarSlide/Slide.jsx";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";
import image5 from "./image/5.jpg";
import { useRef } from "react";
export default function SeminarSlide() {
  let webinarDetails = [
    {
      image: image1,
      title: "Equal Opportunity Cell",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
      place: "Pondicherry University",
      time: "12/8/2022, Friday",
    },
    {
      image: image2,
      title: "Equal Opportunity Cell",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
      place: "Pondicherry University",
      time: "12/8/2022, Friday",
    },
    {
      image: image3,
      title: "Equal Opportunity Cell",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
      place: "Pondicherry University",
      time: "12/8/2022, Friday",
    },
    {
      image: image4,
      title: "Equal Opportunity Cell",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
      place: "Pondicherry University",
      time: "12/8/2022, Friday",
    },
    {
      image: image5,
      title: "Equal Opportunity Cell",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
      place: "Pondicherry University",
      time: "12/8/2022, Friday",
    },
  ];
  let count = 1;
  let leftValue = 0;
  let EachSlideRef = useRef(null);
  let SeminarSlideContainerRef = useRef(null);
  useEffect(() => {
    setInterval(() => {
      let containerWidth = EachSlideRef.current.clientWidth;
      if (count < webinarDetails.length - 1) {
        count += 1;
      } else {
        count = 0;
      }
      leftValue = containerWidth * count;
      SeminarSlideContainerRef.current.style.left = -leftValue + "px";
    }, 5000);
  }, []);

  return (
    <section id="SeminarSlidePage">
      <div className="SeminarSlideParentMain">
        <div className="SeminarSlideParent">
          <div className="SeminarSlideContainer" ref={SeminarSlideContainerRef}>
            {webinarDetails.map((eachDetail, index) => {
              return (
                <div className="EachSlide" key={index} ref={EachSlideRef}>
                  <SeminarHtml
                    image={eachDetail.image}
                    title={eachDetail.title}
                    details={eachDetail.details}
                    place={eachDetail.place}
                    time={eachDetail.time}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="EachSlide">
              <SeminarHtml
                image={image2}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div>
            <div className="EachSlide">
              <SeminarHtml
                image={image3}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div>
            <div className="EachSlide">
              <SeminarHtml
                image={image4}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div>
            <div className="EachSlide">
              <SeminarHtml
                image={image5}
                title="Equal Opportunity Cell"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam
              nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar
              magna risus, orci nisl pellentesque fermentum quam senectus."
                place="St Joseph's College of Arts & Science, Cuddalore"
                time=" 12/8/2022, Friday"
              />
            </div> */
}

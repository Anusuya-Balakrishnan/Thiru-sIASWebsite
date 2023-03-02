import React from "react";
import Slide from "./Slide.jsx";
import image1 from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import image4 from "../image/4.jpg";
import image5 from "../image/5.jpg";
import { useRef, useEffect } from "react";

export default function SmallSlideHtml() {
  // let webinarDetails = [
  //   {
  //     image: image1,
  //     title: "Equal Opportunity Cell",
  //     details:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
  //     place: "Pondicherry University",
  //     time: "12/8/2022, Friday",
  //   },
  //   {
  //     image: image2,
  //     title: "Equal Opportunity Cell",
  //     details:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
  //     place: "Pondicherry University",
  //     time: "12/8/2022, Friday",
  //   },
  //   {
  //     image: image3,
  //     title: "Equal Opportunity Cell",
  //     details:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
  //     place: "Pondicherry University",
  //     time: "12/8/2022, Friday",
  //   },
  //   {
  //     image: image4,
  //     title: "Equal Opportunity Cell",
  //     details:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
  //     place: "Pondicherry University",
  //     time: "12/8/2022, Friday",
  //   },
  //   {
  //     image: image5,
  //     title: "Equal Opportunity Cell",
  //     details:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam nunc tellus interdum sed id aliquam tincidunt nec. Dictum pulvinar magna risus, orci nisl pellentesque fermentum quam senectus.",
  //     place: "Pondicherry University",
  //     time: "12/8/2022, Friday",
  //   },
  // ];
  let webinarDetails = [
    {
      image: image1,
      title: "Special classes for UPSC 2017, 2018, 2019",
      details:
        "",
      place: "Pondicherry University",
      time: "12/8/2022, Friday",
    },
    {
      image: image2,
      title: "Demo Session for Competitive Examination Cuddalore St. Joseph arts and science college",
      details:
        "",
      place: "St. Joseph Arts and Science College",
      time: "12/8/2022, Friday",
    },
    {
      image: image3,
      title: "IAS examination preparation and strategies",
      details:
        "",
      place: "Sri Ram college of technology, Chennai",
      time: "July 2021",
    },
    
    {
      image: image5,
      title: "UPSC clarification and preparation",
      details:
        "",
      place: "Christ institute of technology Puducherry",
      time: "Feb 2020",
    },
  ];
  let count = 1;
  let leftValue = 0;
  let SmallSeminarEachSlideRef = useRef(null);
  let SmallSeminarContainerRef = useRef(null);
  useEffect(() => {
    setInterval(() => {
      let containerWidth = SmallSeminarEachSlideRef.current.clientWidth;
      if (count < webinarDetails.length - 1) {
        count += 1;
      } else {
        count = 0;
      }
      leftValue = containerWidth * count;
      SmallSeminarContainerRef.current.style.left = -leftValue + "px";
      console.log(leftValue);
    }, 5000);
  }, []);
  return (
    <section id="SmallSlideHtml">
      <div className="SmallSeminarSlideMain">
        <div className="SmallSeminarSlideParent">
          <div className="SmallSeminarContainer" ref={SmallSeminarContainerRef}>
            {webinarDetails.map((eachDetail, index) => {
              return (
                <div
                  className="SmallSeminarEachSlide"
                  key={index}
                  ref={SmallSeminarEachSlideRef}
                >
                  <Slide
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

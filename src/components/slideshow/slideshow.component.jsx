import React from "react";
import { Zoom } from "react-slideshow-image";
import "./slideshow.styles.scss";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
const images = [slide1, slide2, slide3];

const zoomOutProperties = {
  duration: 4000,
  transitionDuration: 600,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img
            className="slide-container-size"
            key={index}
            style={{ width: "100%" }}
            src={each}
            alt="slides"
          />
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;

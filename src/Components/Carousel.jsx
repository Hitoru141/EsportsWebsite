import { useState, useEffect } from "react";
import "../Styles/hero.css";
import samplehero from "../assets/samplehero.jpg";
import samplehero2 from "../assets/samplehero2.jpg";
import samplehero3 from "../assets/samplehero3.jpg";

import { BiChevronRightCircle } from "react-icons/bi";
import { BiChevronLeftCircle } from "react-icons/bi";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [samplehero, samplehero2, samplehero3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carousel-image ${
              index === activeIndex ? "active" : ""
            }`}
            alt={`Carousel Image ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <div className="carousel-control" onClick={handlePrev}>
          <BiChevronLeftCircle />
        </div>
        <div className="carousel-control" onClick={handleNext}>
          <BiChevronRightCircle />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

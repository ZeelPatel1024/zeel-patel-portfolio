import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 9;
  const itemWidth = 1232 + 16; // 200px + 16px margin-right from CSS

  const next = () => {
    if (currentIndex + visibleCount < items.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel">
      <button onClick={prev} disabled={currentIndex === 0}>
        ◀
      </button>
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * itemWidth}px)`,
          }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={next}
        disabled={currentIndex + visibleCount >= items.length}
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;

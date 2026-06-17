import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Make sure current index is within bounds if screen width (visibleCount) changes
  useEffect(() => {
    const maxIndex = Math.max(0, items.length - visibleCount);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCount, items.length, currentIndex]);

  const next = () => {
    if (currentIndex + visibleCount < items.length) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const maxIndex = Math.max(0, items.length - visibleCount);

  return (
    <div className="carousel-container">
      {/* Navigation Buttons */}
      <button 
        className="carousel-nav-btn prev-btn" 
        onClick={prev} 
        disabled={currentIndex === 0}
        aria-label="Previous Project"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="carousel-arrow">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Track viewport window */}
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div 
              className="carousel-item" 
              key={index}
              style={{
                flex: `0 0 ${100 / visibleCount}%`,
                maxWidth: `${100 / visibleCount}%`
              }}
            >
              <div className="carousel-item-inner">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className="carousel-nav-btn next-btn" 
        onClick={next} 
        disabled={currentIndex >= maxIndex}
        aria-label="Next Project"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="carousel-arrow">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Pagination dots at the bottom */}
      {maxIndex > 0 && (
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

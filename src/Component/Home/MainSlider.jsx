import React, { useState, useEffect } from 'react'
import alltimebest from "../assets/img/all-time-best-seller.jpg"
import bbiadvit from "../assets/img/BBI-advit-banner.jpg"
import bbijournol from "../assets/img/BBI-Journal.jpg"
import bbitestpep from "../assets/img/BBI-Test-pep.jpg"
import childandYoung from "../assets/img/children-and-young-adult.jpg"
import homebanner from "../assets/img/home-banner-6.jpg"
import schoolbooks from "../assets/img/school-books.jpg"
import topauthers from "../assets/img/Top-authers.jpg"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    { id: 1, image: alltimebest, alt: 'img' },
    { id: 2, image: bbiadvit, alt: 'img' },
    { id: 3, image: bbijournol, alt: 'img' },
    { id: 4, image: bbitestpep, alt: 'img' },
    { id: 5, image: childandYoung, alt: 'img' },
    { id: 4, image: homebanner, alt: 'img' },
    { id: 4, image: schoolbooks, alt: 'img' },
    { id: 4, image: topauthers, alt: 'img' },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(current => 
          current === slides.length - 1 ? 0 : current + 1
        );
      }, 3000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider container */}
      <div className="relative h-[530px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        <IoIosArrowBack size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        <IoIosArrowForward size={24} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default MainSlider


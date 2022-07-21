import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slidar-data";
import Image from "next/image"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <Image src={slide.image} alt="slide" layout="fill" className="image" />
                <div className="content">
                  <h2 className="md:text-5xl text-3xl text-center font-semibold">{slide.heading}</h2>
                  <p className="text-2xl sm:text-1xl ">{slide.desc}</p>
                  <hr />
                  <button className="py-2 px-5 text-2xl sm:text-1xl font-semibold mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:text-black">Get Started</button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
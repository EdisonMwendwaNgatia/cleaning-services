import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Primary color palette to match navbar
const colors = {
  primary: "#1a73e8",
  primaryDark: "#0d47a1",
  secondary: "#e8f0fe",
  white: "#ffffff",
  lightGray: "#f5f5f5",
  text: "#333333",
  overlay: "rgba(0, 0, 0, 0.4)"
};

const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, ${colors.overlay});
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: ${colors.white};
`;

const SlideTitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SlideSubtitle = styled.p`
  margin: 0.5rem 0 0;
  font-size: 1.2rem;
  max-width: 600px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  color: ${colors.primary};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${colors.white};
  }
  
  &:focus {
    outline: none;
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const Indicator = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? colors.primary : 'rgba(255, 255, 255, 0.6)'};
  border: 2px solid ${colors.white};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? colors.primary : 'rgba(255, 255, 255, 0.8)'};
  }
  
  &:focus {
    outline: none;
  }
`;

const ImageSlider = () => {
  // Sample slides with titles and descriptions
  const slides = [
    {
      image: "/images/slide12.jpg",
      title: "Professional Cleaning Services",
      subtitle: "Transform your space with our expert cleaning solutions"
    },
    {
      image: "/images/slide11.jpg",
      title: "Residential & Commercial",
      subtitle: "Tailored cleaning packages for homes and businesses"
    },
    {
      image: "/images/slide13.jpg",
      title: "Eco-Friendly Products",
      subtitle: "Safe for your family, pets, and the environment"
    },
    {
      image: "/images/slide9.jpg",
      title: "Experienced & Trusted Team",
      subtitle: "Fully insured professionals with attention to detail"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000); // Change image every 5 seconds
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide key={index} active={index === currentIndex}>
          <SlideImage src={slide.image} alt={`${slide.title}`} />
          <SlideOverlay>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
          </SlideOverlay>
        </Slide>
      ))}
      
      <NavButton className="prev" onClick={goToPrevSlide}>
        &#8249;
      </NavButton>
      <NavButton className="next" onClick={goToNextSlide}>
        &#8250;
      </NavButton>
      
      <IndicatorsContainer>
        {slides.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === currentIndex} 
            onClick={() => goToSlide(index)} 
          />
        ))}
      </IndicatorsContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
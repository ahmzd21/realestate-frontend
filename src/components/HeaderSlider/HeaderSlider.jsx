// src/components/layout/HeaderSlider/HeaderSlider.jsx
import React from 'react';
import Slider from 'react-slick'; // Import the Slider component
import { Link } from 'react-router-dom'; // For navigation buttons
import './HeaderSlider.css'; // Custom styles for your slider

function HeaderSlider() {
  // Slider settings (customize as needed)
  const settings = {
    dots: true,        // Show navigation dots
    infinite: true,    // Loop the slides
    speed: 500,        // Transition speed
    slidesToShow: 1,   // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,    // Auto-play the slides
    autoplaySpeed: 5000, // Time between slides (5 seconds)
    fade: true,        // Fade effect for transitions
    cssEase: "ease-in-out", // Easing function
    arrows: false      // Hide default arrows, we'll make custom ones if needed
  };

  // Dummy slide data - replace with dynamic data later if needed
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Find Your Dream Home',
      subtitle: 'Explore thousands of listings across Pakistan.',
      buttonText: 'Browse Properties',
      buttonLink: '/buy'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542321994-0df81c449c17?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'List Your Property With Ease',
      subtitle: 'Reach millions of potential buyers and renters.',
      buttonText: 'Sell Your Home',
      buttonLink: '/sell'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1668911494256-becf9fea265b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Expert Agents at Your Service',
      subtitle: 'Connect with seasoned professionals for personalized guidance.',
      buttonText: 'Meet Our Agents',
      buttonLink: '/agents'
    }
  ];

  return (
    <div className="header-slider">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="slider-slide">
            <img src={slide.image} alt={slide.title} className="slider-image" />
            <div className="overlay"></div> {/* Dark overlay for text readability */}
            <div className="slider-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <Link to={slide.buttonLink} className="slider-button">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeaderSlider;
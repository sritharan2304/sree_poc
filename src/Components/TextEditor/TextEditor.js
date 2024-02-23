import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const MyCarousel = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleButtonClick = () => {
    setShowCarousel(!showCarousel);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div >
      <button onClick={handleButtonClick}>Toggle Carousel</button>
      {showCarousel && (
        <Slider {...settings}>
          <div>
            <Slide1 />
          </div>
          <div>
            <Slide2 />
          </div>
          <div>
            <Slide3 />
          </div>
        </Slider>
      )}
    </div>
  );
};

export default MyCarousel;

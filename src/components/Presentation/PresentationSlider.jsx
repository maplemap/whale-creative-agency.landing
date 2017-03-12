import React from 'react';
import Slider from 'react-slick';

import Slide1 from './PresentationSlide_1';
import Slide2 from './PresentationSlide_2';
import Slide3 from './PresentationSlide_3';
import Slide4 from './PresentationSlide_4';

import getUniqueID from '../../utils/getUniqueID';

const PresentationSlider = () => {
  const slideComponents = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />
  ];

  const slides = slideComponents.map(slide =>
    <div key={getUniqueID()}>
      {slide}
    </div>
  );

  const sliderSettings = {
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000
  };

  return (
    <Slider {...sliderSettings}>
      {slides}
    </Slider>
  );
};

const CustomPrevArrow = props => (
  <button type="button" className="slick-prev" {...props} />
);

const CustomNextArrow = props => (
  <button type="button" className="slick-next" {...props} />
);

export default PresentationSlider;

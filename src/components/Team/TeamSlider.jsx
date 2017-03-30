import React from 'react';
import Slider from 'react-slick';

import Slide1 from './TeamSlide_1';
import Slide2 from './TeamSlide_2';
import Slide3 from './TeamSlide_3';
import Slide4 from './TeamSlide_4';

import getUniqueID from '../../helpers/getUniqueID';

class TeamSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numPrevBtn: 4,
      numNextBtn: 2
    };
  }

  calcPrevNextNumberSlide = (amount, currentIndex) => {
    const newCurrentIndex = currentIndex + 1;

    const numPrevBtn = (newCurrentIndex > 1) ? newCurrentIndex - 1 : amount;
    const numNextBtn = (newCurrentIndex < amount) ? newCurrentIndex + 1 : 1;

    this.setState({
      numPrevBtn,
      numNextBtn
    });
  }

  render() {
    const slideComponents = [
      <Slide1 />,
      <Slide2 />,
      <Slide3 />,
      <Slide4 />
    ];

    // const slides = slideComponents.map(slide =>
    //   <div key={getUniqueID()}>
    //     {slide}
    //   </div>
    // );

    const sliderSettings = {
      infinite: true,
      arrows: true,
      dots: false,
      prevArrow: <CustomPrevArrow numPrevBtn={this.state.numPrevBtn} />,
      nextArrow: <CustomNextArrow numNextBtn={this.state.numNextBtn} />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      afterChange: () => this.calcPrevNextNumberSlide(slideComponents.length)
    };

    return (
      <Slider {...sliderSettings}>
        { // TODO: Check this
          slideComponents.map(slide =>
            <div key={getUniqueID()}>
              {slide}
            </div>
          )
        }
      </Slider>
    );
  }
}

const CustomPrevArrow = props => (
  <button
    type="button"
    className="slick-prev"
    data-page-num={props.numPrevBtn}
    {...this.props}
  />
);

const CustomNextArrow = props => (
  <button
    type="button"
    className="slick-next"
    data-page-num={props.numNextBtn}
    {...this.props}
  />
);

export default TeamSlider;

import React from 'react';
import ProjectSlider from 'react-slick';

import ReviewBox from './ReviewBox';

import './GalleryReview.less';

class GalleryReview extends React.Component {
  static defaultProps = {
    amountImgPreview: 4
  };

  getCurrentSlideIndex = () => {
    const slidePosition = this.props.projects.map(project =>
      parseInt(project.id, 10)
    ).indexOf(this.props.currentSlideID);

    return (slidePosition + 1) ? slidePosition : false;
  }

  render() {
    const projectSliderSettings = {
      draggable: false,
      infinite: (this.props.projects.length > 1),
      arrows: (this.props.projects.length > 1),
      dots: false,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      slickGoTo: this.getCurrentSlideIndex()
    };

    return (
      <div className="gallery-review">
        <ProjectSlider {...projectSliderSettings} >
          {
            this.props.projects.map(project =>
              <div key={project.id}>
                <ReviewBox
                  project={project}
                  onClickCloseReview={this.props.onClickCloseReview}
                  amountImgPreview={this.props.amountImgPreview}
                />
              </div>
            )
          }
        </ProjectSlider>
      </div>
    );
  }
}

const CustomPrevArrow = () => (
  <button type="button" className="slick-prev" {...this.props} />
);

const CustomNextArrow = () => (
  <button type="button" className="slick-next" {...this.props} />
);

export default GalleryReview;

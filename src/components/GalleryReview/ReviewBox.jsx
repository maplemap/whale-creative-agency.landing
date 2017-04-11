import React from 'react';
import ImageLoading from '../ImageLoading';

import getUniqueID from '../../helpers/getUniqueID';

class ReviewBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageViewFilename: this.props.project.images[0],
      activePreviewIndex: 0
    };
  }

  handlerClickItemPreviewImg = (imageName, index) => {
    this.setState({
      imageViewFilename: imageName,
      activePreviewIndex: index
    });
  };

  render() {
    return (
      <div className="gallery-review__body">
        <button
          className="close-btn close-btn--gallery-review"
          onClick={this.props.onClickCloseReview}
        />
        <div className="gallery-review__project-name"> {this.props.project.name} </div>
        <div className="gallery-review__project-customer"> {this.props.project.customer} </div>
        <div className="gallery-review__project-view">
          <ImageLoading
            src={`static/projects/${this.state.imageViewFilename}`}
            alt={this.props.project.name}
          />
        </div>
        <div className="gallery-review__project-preview">
          {
            this.props.project.images.map((imageName, index) => (
              (index < this.props.amountImgPreview)
              ?
                <button
                  key={getUniqueID()}
                  className={`gallery-review__project-preview-item ${(index === this.state.activePreviewIndex) ? 'gallery-review__project-preview-item--active' : ''}`}
                  onClick={() => this.handlerClickItemPreviewImg(imageName, index)}
                >
                  <ImageLoading
                    className="gallery-review__project-image"
                    src={`static/projects/${imageName}`}
                    alt={this.props.project.name}
                  />
                </button>
              : null
            ))
          }
        </div>
      </div>
    );
  }
}

export default ReviewBox;

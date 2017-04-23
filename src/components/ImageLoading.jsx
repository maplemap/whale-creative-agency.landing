import React from 'react';
import Spinner from './Spinner';

import './ImageLoading.less';


class ImageLoading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const imgSrc = this.imgView.getAttribute('src');
    const img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }

  onImageLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    let { className, ...props } = this.props;
    let spinner = null;

    if (this.state.loaded) {
      className = (className) ? `${className} image-loaded` : 'image-loaded';
    } else {
      spinner = <Spinner />;
    }

    return (
      <div className="image-holder">
        {spinner}
        <img
          ref={c => (this.imgView = c)}
          alt=""
          className={className}
          {...props}
        />
      </div>
    );
  }
}

export default ImageLoading;

import React from 'react';
import Masonry from 'react-masonry-component';


class PortfolioGallery extends React.Component {
  static defaultProps = {
    masonryOptions: {
      gutter: 20
    }
  };

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps.projects) !== JSON.stringify(this.props.projects)) {
      this.appearEffectForGrid();
    }
  }

  appearEffectForGrid = () => {
    const galleryGridClassList = this.galleryGrid.classList;
    galleryGridClassList.add('animated', 'fadeInUp');

    setTimeout(() => {
      galleryGridClassList.remove('animated', 'fadeInUp');
    }, 1000);
  }

  render() {
    const projects = this.props.projects;

    return (
      <div className="gallery gallery--portfolio">
        <div
          ref={c => (this.galleryGrid = c)}
          className="gallery__grid"
        >
          <Masonry options={this.props.masonryOptions}>
            {
              projects.map(project =>
                <button
                  key={project.id}
                  data-index={project.id}
                  className="gallery__item"
                  onClick={this.props.onClickGalleryItem}
                >
                  <img src={`static/projects/${project.shortcut}`} alt={project.name} />
                  <div className="gallery__mask">
                    <div
                      className="gallery__see-icon"
                      title={`see ${project.name}`}
                    >
                        See project
                    </div>
                  </div>
                </button>
                )
            }
          </Masonry>
        </div>
      </div>
    );
  }
}

export default PortfolioGallery;

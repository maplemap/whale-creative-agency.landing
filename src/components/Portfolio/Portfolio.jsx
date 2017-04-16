import React from 'react';
// import Waypoint from 'react-waypoint';
import GuidLines from '../GuidLines';
import PortfolioGallery from './PortfolioGallery';
import PortolioDescription from './PortolioDescription';
import GalleryReview from '../GalleryReview/GalleryReview';

import './Portfolio.less';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: 'all',
      projects: this.props.projects,
      galleryReviewOn: false,
      currentSlideID: 0
    };
  }

  handlerSortPortfolio = (e) => {
    const sortCategory = e.target.dataset.category;
    let sortProjects;

    if (sortCategory === 'all') {
      sortProjects = this.props.projects;
    } else {
      sortProjects = this.props.projects.filter(project => (
        project.category === sortCategory
      ));
    }

    this.setState({
      filter: sortCategory,
      projects: sortProjects
    });
  };

  handlerClickCloseReview = () => {
    this.setState({
      galleryReviewOn: false,
      currentSlideID: 0
    });
  };

  handlerClickGalleryItem = (e) => {
    let elementIndex = e.currentTarget.getAttribute('data-index');
    elementIndex = parseInt(elementIndex, 10);

    this.setState({
      currentSlideID: elementIndex,
      galleryReviewOn: true
    });
  };

  render() {
    return (
      <section id="portfolioSection" className="section portfolio">
        <div className="portfolio__body">
          <PortolioDescription
            projects={this.props.projects}
            description={this.props.categoryDescription}
            filter={this.state.filter}
            onClickSortPortfolio={this.handlerSortPortfolio}
          />

          <PortfolioGallery
            projects={this.state.projects}
            onClickGalleryItem={this.handlerClickGalleryItem}
          />
        </div>
        <div className={`popup popup--portfolio ${(this.state.galleryReviewOn) ? 'popup--show' : ''}`}>
          <GalleryReview
            onClickCloseReview={this.handlerClickCloseReview}
            projects={this.state.projects}
            currentSlideID={this.state.currentSlideID}
          />
        </div>
        <GuidLines
          colorScheme="white"
          disableLines={[5]}
        />
        { /* <div className="waypoint waypoint--portfolio">
              <Waypoint onEnter={this.props.onChangeSection.bind(this, 'portfolio')} />
          </div>
        */}
      </section>
    );
  }
}

export default Portfolio;

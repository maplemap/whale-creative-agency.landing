import React from 'react';
import getUniqueID from '../../helpers/getUniqueID';

class PortolioDescription extends React.Component {
  getUniqueCategories() {
    return [...new Set(this.props.projects.map(project => project.category))];
  }

  getDescription = (category) => {
    let description = this.props.description.default;

    if (category !== 'all') {
      description = this.props.description.galleryCategory[category];
    }

    return description;
  };

  render() {
    const categories = this.getUniqueCategories();

    return (
      <article className="description description--portfolio">
        <h2 className="description__title">Our work</h2>
        <ul className="gallery-menu gallery-menu--portfolio">
          <li
            className={`gallery-menu__item ${(this.props.filter === 'all') ? 'gallery-menu__item--current' : ''}`}
            data-category="all"
            onClick={this.props.onClickSortPortfolio}
          >
            All
          </li>
          {
            categories.map(category =>
              <li
                key={getUniqueID()}
                data-category={category}
                className={`gallery-menu__item ${(this.props.filter === category) ? 'gallery-menu__item--current' : ''}`}
                onClick={this.props.onClickSortPortfolio}
              >
                {category}
              </li>
            )
          }
        </ul>
        <hr className="description__stroke" />
        <p className="description__text">
          {this.getUniqueCategories(this.props.filter)}
        </p>
      </article>
    );
  }
}

export default PortolioDescription;

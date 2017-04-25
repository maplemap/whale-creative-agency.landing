import React from 'react';
import { Link } from 'react-scroll';

class Menu extends React.Component {
  handlerClickOnLinks = () => {
    if (this.props.className === 'branches branches--navigation') {
      this.context.hideNavigationPopup();
    }
  }

  render() {
    const linkSettings = {
      smooth: true,
      duration: 500,
      onClick: this.handlerClickOnLinks
    };

    return (
      <div className={this.props.className} >
        <div className="branches__item">
          <div className="branches__head branches__head--marked">About us</div>
          <div className="branches__point">
            <div className="branches__point-name">
              <Link
                {...linkSettings}
                to="teamSection"
              >
                our team
              </Link>
            </div>
            <div className="branches__point-description">our story in faces</div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <a href="#vision">our vision</a>
            </div>
            <div className="branches__point-description">why/how we are doing design</div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <a href="#process">our process</a>
            </div>
            <div className="branches__point-description">how the magic happens</div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <a href="#blog">blog</a>
            </div>
          </div>
        </div>
        <div className="branches__item">
          <div className="branches__head">Our work</div>
          <div className="branches__point">
            <div className="branches__point-name">
              <Link
                {...linkSettings}
                to="portfolioSection"
              >
                web sites
              </Link>
            </div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <Link
                {...linkSettings}
                to="portfolioSection"
              >
                branding
              </Link>
            </div>
            <div className="branches__point-description">brand is not just a logo</div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <Link
                {...linkSettings}
                to="portfolioSection"
              >
                  mobile apps
              </Link>
            </div>
            <div className="branches__point-description">ios / android</div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <Link
                {...linkSettings}
                to="portfolioSection"
              >
                graphic design
              </Link>
            </div>
          </div>
        </div>
        <div className="branches__item">
          <div className="branches__head branches__head--branding">Agency</div>
          <div className="branches__point">
            <div className="branches__point-name">
              <a href="#presentation">download our presentation</a>
            </div>
          </div>
          <div className="branches__point">
            <div className="branches__point-description">
              or<br />
            </div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">
              <a href="#brief">fill the brief</a></div>
            <div className="branches__point-description">let’s make something awesome together</div>
          </div>
        </div>
        <div className="branches__item branches__item--contacts">
          <div className="branches__head">Contacts</div>
          <div className="branches__point">
            <div className="branches__point-name">email</div>
            <div className="branches__point-description"><a href="mailto:sales@whaledesign.me">sales@whaledesign.me</a></div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">skype</div>
            <div className="branches__point-description"><a href="skype:whaledesign?call">whaledesign.me</a></div>
          </div>
          <div className="branches__point">
            <div className="branches__point-name">phone</div>
            <div className="branches__point-description">+38 (097) 789 08 00</div>
          </div>
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  className: React.PropTypes.string
};

Menu.defaultProps = {
  className: 'branches'
};

Menu.contextTypes = {
  hideNavigationPopup: React.PropTypes.func.isRequired
};

export default Menu;

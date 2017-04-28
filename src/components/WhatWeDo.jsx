import React from 'react';
// import Waypoint from 'react-waypoint';
import GuidLines from './GuidLines';
import GotProjectPopup from './Popups/GotProjectPopup';

import './WhatWeDo.less';


class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupActive: false
    };
  }

  handlerCallWhatWeDo = () => {
    this.setState({
      isPopupActive: true
    });
  }

  handlerClosePopup = () => {
    this.setState({
      isPopupActive: false
    });
  }

  render() {
    return (
      <section className="section what-we-do">
        <div className="what-we-do__body">
          <div className="page page--what-we-do">
            <div className="page__body">
              <h2 className="lead-header lead-header--what-we-do">
                <i>*</i>whale done <br /> design services
              </h2>
              <div className="page__text">Full stack design services for your company or product.</div>
                <div className="page__content">
                  <button
                    className="call call--what-we-do"
                    onClick={this.handlerCallWhatWeDo}
                  >
                      let’s make something stunning together
                  </button>
                  <div className="branches branches--what-we-do">
                    <div className="branches__item">
                      <div className="branches__head branches__head--web">Web</div>
                      <div className="branches__point">
                        <div className="branches__point-name">corporate website</div>
                        <div className="branches__point-description">for you and your company </div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">landing pages</div>
                        <div className="branches__point-description">promote your startup or     product with unique design</div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">shop</div>
                        <div className="branches__point-description">increase your sales by showing them in a beautiful way</div>
                      </div>
                    </div>
                    <div className="branches__item">
                      <div className="branches__head branches__head--mobile">Mobile</div>
                      <div className="branches__point">
                        <div className="branches__point-name">UI / UX</div>
                        <div className="branches__point-description">optimising your app for being easy to use and stunning looking</div>
                      </div>
                    </div>
                    <div className="branches__item">
                      <div className="branches__head branches__head--promo">Promo</div>
                      <div className="branches__point">
                        <div className="branches__point-name">social network graphics</div>
                        <div className="branches__point-description">banners and ather content you need</div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">advertisement</div>
                        <div className="branches__point-description">social / political promotional ads</div>
                      </div>
                    </div>
                    <div className="branches__item">
                      <div className="branches__head branches__head--branding">Branding</div>
                      <div className="branches__point">
                        <div className="branches__point-name">logo / mark or corporate identity</div>
                        <div className="branches__point-description">you company deserves a unique brand</div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">brandbook and assets</div>
                        <div className="branches__point-description">colour scheme business cards and all the props yu need</div>
                      </div>
                    </div>
                    <div className="branches__item">
                      <div className="branches__head branches__head--graphic">Graphic</div>
                      <div className="branches__point">
                        <div className="branches__point-name">posters</div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">prospects & brochures</div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">presentations</div>
                        <div className="branches__point-description">pdf / powerpoint keynote</div>
                      </div>
                      <div className="branches__point">
                        <div className="branches__point-name">illustration</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <GotProjectPopup
          isPopupActive={this.state.isPopupActive}
          handlerClosePopup={this.handlerClosePopup}
        />

        <GuidLines />
        { /*
          <div className="waypoint">
          <Waypoint onEnter={this.props.onChangeSection.bind(this, 'what-we-do')} />
        </div>
        */
        }
      </section>
    );
  }
}

export default WhatWeDo;

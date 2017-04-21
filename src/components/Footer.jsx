import React from 'react';
// import Waypoint from 'react-waypoint';
import { Link } from 'react-scroll';

import GuidLines from './GuidLines';
import Menu from './Menu';

import './Footer.less';

class Footer extends React.Component {
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
      <section className="section footer">
        <div className="footer__body">
          <div className="page page--footer">
            <div className="page__body">
              <h2 className="lead-header lead-header--footer">
                  imagination <br /> is the
                  <span className="lead-header__underline">only</span>
                  limit.
              </h2>
              <div className="page__content">
                <Menu className="branches branches--footer" />
                <ul className="socials socials--footer">
                  <li className="socials__cell">
                    <button className="socials__linkedin" />
                  </li>
                  <li className="socials__cell">
                    <button className="socials__behance" />
                  </li>
                  <li className="socials__cell">
                    <button className="socials__dribble" />
                  </li>
                  <li className="socials__cell">
                    <button className="socials__instagram" />
                  </li>
                  <li className="socials__cell">
                    <button className="socials__soundcloud" />
                  </li>
                </ul>
                <div className="footer__follow" >#followthewhale</div>
              </div>
            </div>
          </div>
        </div>
        <Link
          smooth
          className="footer__up"
          to="appSection"
          duration={500}
        />
        <div className="footer__since">
          <span>since</span>
          <span>2016</span>
        </div>
        <GuidLines />
        { /* <div className="waypoint">
          <Waypoint onEnter={this.props.onChangeSection.bind(this, 'footer')} />
        </div>
        */ }
      </section>
    );
  }
}

export default Footer;

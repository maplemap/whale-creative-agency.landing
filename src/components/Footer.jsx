import React from 'react';
import GuidLines from './GuidLines.jsx';
import Waypoint from 'react-waypoint';
import {Link} from 'react-scroll';

import './Footer.less';

import Menu from './Menu.jsx';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopupActive: false

        }
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
                                imagination <br/> is the <span className="lead-header__underline">only</span> limit.
                            </h2>
                            <div className="page__content">
                                <Menu className="branches branches--footer" />
                                <ul className="socials socials--footer">
                                    <li className="socials__cell">
                                        <a className="socials__linkedin" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__behance" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__dribble" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__instagram" href="#"></a>
                                    </li>
                                    <li className="socials__cell">
                                        <a className="socials__soundcloud" href="#"></a>
                                    </li>
                                </ul>
                                <div className="footer__follow" >#followthewhale</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                     className="footer__up"
                     to="appSection"
                     smooth={true}
                     duration={500}
                />
                <div className="footer__since">
                    <span>since</span>
                    <span>2016</span>
                </div>
                <GuidLines/>
                <div className="waypoint">
                    <Waypoint onEnter={this.props.onChangeSection.bind(this, 'footer')} />
                </div>
            </section>
        )
    }
}

export default Footer;

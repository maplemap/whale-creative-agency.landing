import React from "react";

class Menu extends React.Component {

    render() {
        return(
            <div className={this.props.className} >
                <div className="branches__item">
                    <div className="branches__head branches__head--marked">About us</div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">our team</a></div>
                        <div className="branches__point-description">our story in faces</div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">our vision</a></div>
                        <div className="branches__point-description">why/how we are doing design</div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">our process</a></div>
                        <div className="branches__point-description">how the magic happens</div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">blog</a></div>
                    </div>
                </div>
                <div className="branches__item">
                    <div className="branches__head"><a href="#">Our work</a></div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">web sites</a></div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">branding</a></div>
                        <div className="branches__point-description">brand is not just a logo</div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">mobile apps</a></div>
                        <div className="branches__point-description">ios / android</div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">graphic design</a></div>
                    </div>
                </div>
                <div className="branches__item">
                    <div className="branches__head branches__head--branding">Agency</div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">download our presentation</a></div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-description">or<br/></div>
                    </div>
                    <div className="branches__point">
                        <div className="branches__point-name"><a href="#">fill the brief</a></div>
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
        )
    }
}

Menu.propTypes = {
  className: React.PropTypes.string
};

Menu.defaultProps = {
  className: 'branches'
};

export default Menu;
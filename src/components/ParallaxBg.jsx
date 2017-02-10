import React from "react";
import ReactDOM from "react-dom";

class ParallaxBackground extends React.Component {
    static defaultProps = {
        disableParallax: false,
        parallaxSpeed: 0.03
    };

    state = {
        positionX: '',
        positionY: '',
        style: {}
    };

    componentDidMount() {
        if(this.props.disableParallax) return;

        window.addEventListener('scroll', this.handleScroll);

        const parallaxBox = ReactDOM.findDOMNode( this.refs.parallaxBox );
        const bgPosition = window.getComputedStyle(parallaxBox).getPropertyValue("background-position").split(' ');

        this.setState({
            positionX: parseInt(bgPosition[0], 10),
            positionY: parseInt(bgPosition[1], 10)
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const newPositionY = this.state.positionY - window.pageYOffset * this.props.parallaxSpeed;

        this.setState({
            style: {
                backgroundPosition: `${this.state.positionX}% ${newPositionY}%`
            }
        });
    };

    render() {
        return(
            <div
                ref="parallaxBox"
                className={this.props.className}
                style={this.state.style}
            >
                {this.props.children}
            </div>
        )
    }
}

export default ParallaxBackground;
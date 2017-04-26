import React from 'react';
// TODO: Refactoring

class ParallaxBackground extends React.Component {
  static defaultProps = {
    disableParallax: false,
    parallaxSpeed: 0.03
  };

  constructor(props) {
    super(props);

    this.state = {
      positionX: '',
      positionY: '',
      style: {}
    };
  }

  componentDidMount() {
    if (!this.props.disableParallax) {
      window.addEventListener('scroll', this.handleScroll);

      const parallaxBox = ReactDOM.findDOMNode( this.refs.parallaxBox );
      const bgPosition = window.getComputedStyle(parallaxBox).getPropertyValue("background-position").split(' ');

      this.setState({
        positionX: parseInt(bgPosition[0], 10),
        positionY: parseInt(bgPosition[1], 10)
      });
    }
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
    return (
      <div
        ref={c => (this.parallaxBox = c)}
        className={this.props.className}
        style={this.state.style}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ParallaxBackground;

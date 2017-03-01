import React from 'react';
import GuidLines from '../GuidLines';
import Slider from './PresentationSlider';
// import Waypoint from 'react-waypoint';

import './Presentation.less';

const Presentation = () => (
  <section className="section presentation">
    <Slider />
    <GuidLines />
  </section>
);

export default Presentation;
// <div className="waypoint">
//      <Waypoint onEnter={this.props.onChangeSection.bind(this, 'presentation')} />
// </div>

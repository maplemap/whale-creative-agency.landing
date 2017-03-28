import React from 'react';
// import Waypoint from 'react-waypoint';

import GuidLines from '../GuidLines';
import Slider from './TeamSlider';

import './Team.less';


const Team = () => (
  <section id="teamSection" className="section team">
    <Slider />
    <GuidLines colorScheme="white" />
    {
      /* <div className="waypoint">
      <Waypoint onEnter={this.props.onChangeSection.bind(this, 'team')} />
    </div> */
    }
  </section>
);
export default Team;

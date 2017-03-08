import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommonActions from '../actions/CommonActions';

import Example from '../components/Example';
import Header from '../components/Header';
import Presentation from '../components/Presentation/Presentation';
// import Team from './components/Team/Team.jsx';
// import WhatWeDo from './components/WhatWeDo.jsx';
// import Portfolio from './components/Portfolio/Portfolio.jsx';
// import Footer from './components/Footer.jsx';
// import NavigationPopup from './components/Popups/NavigationPopup.jsx';

// import projects from './config/projects.json';
// import config from './config';

class App extends React.Component {
  static childContextTypes = {
    isNavigationPopupActive: React.PropTypes.bool.isRequired,
    showNavigationPopup: React.PropTypes.func.isRequired,
    hideNavigationPopup: React.PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      // projects: projects,
      colorScheme: 'black',
      // sloganName: config.section.presentation.slogan,
      isNavigationPopupActive: false
    };
  }

  getChildContext() {
    return {
      isNavigationPopupActive: this.state.isNavigationPopupActive,
      showNavigationPopup: this.showNavigationPopup,
      hideNavigationPopup: this.hideNavigationPopup
    };
  }

  handlerChangeSection = (section) => {
    let colorScheme;

    switch (section) {
      case 'presentation':
      case 'what-we-do':
      case 'footer':
        colorScheme = 'black';

        break;
      case 'team':
      case 'portfolio':
        colorScheme = 'white';

        break;

      default:
        break;
    }

    this.setState({
      colorScheme
      // sloganName: config.section[section].slogan
    });
  }

  showNavigationPopup = () => {
    this.setState({
      isNavigationPopupActive: true
    });
  }
  hideNavigationPopup = () => {
    this.setState({
      isNavigationPopupActive: false
    });
  }

  handlePositionState = (watcher) => {
    console.log(watcher.offsets);
    console.log(watcher.watchItem.className);
  }


  render() {
    return (
      <div className="app-wrapper">
          <Header
              colorScheme={this.state.colorScheme}
              sloganName={'sloganName'}
          />
          <Presentation
              onChangeSection={this.handlerChangeSection}
          />
        <Example offsets={{ top: 10 }} fullyEnterViewport={this.handlePositionState} className="section_1" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handlePositionState} className="section_2" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handlePositionState} className="section_3" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handlePositionState} className="section_4" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handlePositionState} className="section_5" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handlePositionState} className="section_6" />
        {/* <Team
          onChangeSection={this.handlerChangeSection}
        /> */}
        {/* <WhatWeDo
          onChangeSection={this.handlerChangeSection}
        /> */}
        {/* <Portfolio
          projects={this.state.projects}
          categoryDescription={config.section.portfolio.description}
          onChangeSection={this.handlerChangeSection}
        /> */}
        {/* <Footer
          onChangeSection={this.handlerChangeSection}
        /> */}

        {/* <NavigationPopup
          handlerHideMenuNavigation={this.hideNavigationPopup}
          isNavigationPopupActive = {this.state.isNavigationPopupActive}
         /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CommonActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommonActions from '../actions/CommonActions';

import Header from '../components/Header';
// import Presentation from '../components/Presentation/Presentation';
import Example from '../components/Example';
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

  handleFullyEnterViewport = (watcher) => {
    this.props.actions.setCurrentSection(watcher.watchItem.className);
  }


  render() {
    return (
      <div className="app-wrapper">
        <Header
          colorScheme={this.state.colorScheme}
          sloganName={'sloganName'}
          currentSection={this.props.page.currentSection}
        />
        {/* <Presentation
            onChangeSection={this.handlerChangeSection}
        />*/}
        <Example offsets={{ top: 10, bottom: 85 }} fullyEnterViewport={this.handleFullyEnterViewport} className="section-1" />
        <Example offsets={{ top: 85, bottom: 85 }} fullyEnterViewport={this.handleFullyEnterViewport} className="section-2" />
        <Example offsets={{ top: 85, bottom: 85 }} fullyEnterViewport={this.handleFullyEnterViewport} className="section-3" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handleFullyEnterViewport} className="section-4" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handleFullyEnterViewport} className="section-5" />
        <Example offsets={{ top: 85 }} fullyEnterViewport={this.handlePositionState} className="section-6" />
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
  const { page } = state;

  return {
    page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CommonActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

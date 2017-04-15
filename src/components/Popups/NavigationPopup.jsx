import React from 'react';
import Menu from '../Menu';

const NavigationPopup = props => (
  <div
    className={`popup popup--navigation ${(props.isNavigationPopupActive) ? 'popup--show' : ''}`}
  >
    <button
      className="close-btn close-btn--navigation"
      onClick={props.handlerHideMenuNavigation}
    />
    <div className="popup__wrapper">
      <div className="lead-header lead-header--navigation">
          imagination <br /> is the <span className="lead-header__underline">only</span> limit.
      </div>
      <Menu className="branches branches--navigation" />
      <div className="navigation__sign"> *MENU </div>
    </div>
  </div>
);

export default NavigationPopup;

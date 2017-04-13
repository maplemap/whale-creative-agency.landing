import React from 'react';

const GotProjectPopup = props => (
  <div
    className={`popup popup--what-we-do ${(props.isPopupActive) ? 'popup--show' : ''}`}
  >
    <button
      className="close-btn close-btn--what-we-do"
      onClick={props.handlerClosePopup}
    />
    <div className="popup__wrapper">
      <h2 className="lead-header lead-header--what-we-do">
          got a <br /> project?
      </h2>
      <ul className="contacts contacts--what-we-do">
        <li className="contacts__email">
          <a href="mailto:order@whaledesign.me">order@whaledesign.me</a>
        </li>
        <li className="contacts__skype">
          <a href="skype:whaledesign?call">whaledesign</a>
        </li>
      </ul>
      <div className="what-we-do__or">
        <span className="what-we-do__or-text">or</span>
        <a href="#brief" className="what-we-do__breaf-link">fill out a brief</a>
      </div>
    </div>
  </div>
);

export default GotProjectPopup;

import React from 'react';
import { Watch as scrollmonitorWatch } from 'scrollmonitor-react';

@scrollmonitorWatch
class MyComponent extends React.Component {
  render() {
    const style = {
      height: '1200px',
      textAlign: 'center',
      border: '1px solid'
    };

    let text;
    if (this.props.isInViewport) {
      text = 'I AM in the viewport!';
    } else {
      text = 'You will never see this because it gets replaced when it enters the viewport.';
    }

    return (
      <div style={style} className={this.props.className}>
        {text}
      </div>
    );
  }
}

export default MyComponent;

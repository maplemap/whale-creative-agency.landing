import React from 'react';
import { Watch } from 'scrollmonitor-react';

class MyComponent extends React.Component {
  render() {
    const style = {
      height: '1200px',
      textAlign: 'center',
      border: '1px solid'
    };

  return (
    <div style={style}>no sad</div>
  );
};

    return (
      <div style={style} className={this.props.className}>
        {text}
      </div>
    );
  }
}

export default Watch(MyComponent);

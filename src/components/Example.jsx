import React from 'react';
import { Watch } from 'scrollmonitor-react';

class Example extends React.Component {
  render() {
    const style = {
      height: '1200px',
      textAlign: 'center',
      border: '1px solid'
    };

    return (
      <div className={this.props.className} style={style}>no sad</div>
    );
  }
}

export default Watch(Example);

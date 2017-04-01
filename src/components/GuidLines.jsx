import React from 'react';
import classNames from 'classnames';

import getUniqueID from '../helpers/getUniqueID';

import './GuidLines.less';

class GuidLines extends React.Component {
  static defaultProps = {
    lines: [1, 2, 3, 4, 5, 6]
  };

  render() {
    const disableLines = this.props.disableLines;

    const guidClassConditions = {
      'guid-lines--white': (this.props.colorScheme === 'white')
    };
    const guidClass = classNames('guid-lines', guidClassConditions);

    return (
      <div className={guidClass} >
        {
          this.props.lines.map((num) => {
            const spanClassConditions = {
              hidden: (disableLines && disableLines.indexOf(num) + 1)
            };
            const spanClass = classNames(`guid-lines__${num}`, spanClassConditions);

            return (
              <span
                key={getUniqueID()}
                className={spanClass}
              />
            );
          })
        }
      </div>
    );
  }
}

export default GuidLines;

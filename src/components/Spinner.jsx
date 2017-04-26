import React from 'react';

import './Spinner.less';

const DoubleBounceSpinner = props => (
  <div className="spinner">
    {
      Array(props.elementsAmount).map((element, index) =>
        <div className={`spinner__sk-circle${index + 1} spinner__sk-child`} />
      )
    }
  </div>
);

DoubleBounceSpinner.defaultProps = {
  elementsAmount: 12
};

export default DoubleBounceSpinner;

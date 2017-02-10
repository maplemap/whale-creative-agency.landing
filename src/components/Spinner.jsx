import React from "react";
import './Spinner.less';

class DoubleBounceSpinner extends React.Component {
    render() {
        return(
            <div className="spinner">
                <div className="spinner__sk-circle1 spinner__sk-child"></div>
                <div className="spinner__sk-circle2 spinner__sk-child"></div>
                <div className="spinner__sk-circle3 spinner__sk-child"></div>
                <div className="spinner__sk-circle4 spinner__sk-child"></div>
                <div className="spinner__sk-circle5 spinner__sk-child"></div>
                <div className="spinner__sk-circle6 spinner__sk-child"></div>
                <div className="spinner__sk-circle7 spinner__sk-child"></div>
                <div className="spinner__sk-circle8 spinner__sk-child"></div>
                <div className="spinner__sk-circle9 spinner__sk-child"></div>
                <div className="spinner__sk-circle10 spinner__sk-child"></div>
                <div className="spinner__sk-circle11 spinner__sk-child"></div>
                <div className="spinner__sk-circle12 spinner__sk-child"></div>
            </div>
        )
    }
}

export default DoubleBounceSpinner;
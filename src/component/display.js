import React from "react";
import PropTypes from "prop-types";

import "./display.css";

// This class holds the message display at the top of our app.
class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
};
export default Display;

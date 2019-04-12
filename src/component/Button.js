import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = ["component-button"];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>
          <strong>{this.props.name}!</strong>
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func
};
export default Button;

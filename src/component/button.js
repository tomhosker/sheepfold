import React from "react";
import PropTypes from "prop-types";
import "./button.css";

// This class holds the species of button on our app's menu.
class Button extends React.Component {
  // This stuff handles user input.
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  // Ronseal.
  render() {
    const className = ["component-button"];

    var icon = "assets/fire.svg";

    if(this.props.name === "Breed") icon = "assets/heart.svg";
    else if(this.props.name.indexOf("Add") >= 0) icon = "assets/plus.svg";

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>
          <img src={icon} alt="" width="30"/>
          <strong> {this.props.name}!</strong>
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

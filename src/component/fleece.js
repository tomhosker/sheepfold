import React from "react";
import PropTypes from "prop-types";
import "./fleece.css";

class Fleece extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "fleece",
      this.props.ram ? "ram" : "",
      this.props.branded ? "branded" : "",
      this.props.text
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>
          <strong>{this.props.text}{this.props.name}</strong><br/>Select me!
        </button>
      </div>
    );
  }
}
Fleece.propTypes = {
  name: PropTypes.string,
  ram: PropTypes.bool,
  branded: PropTypes.bool,
  clickHandler: PropTypes.func,
  text: PropTypes.string
};
export default Fleece;

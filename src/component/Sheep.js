import React from "react";
import PropTypes from "prop-types";
import "./Sheep.css";

class Sheep extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "sheep",
      this.props.ram ? "ram" : "",
      this.props.branded ? "branded" : ""
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>
          <strong>{this.props.name}</strong><br/>Select me!
        </button>
      </div>
    );
  }
}
Sheep.propTypes = {
  name: PropTypes.string,
  ram: PropTypes.bool,
  branded: PropTypes.bool,
  clickHandler: PropTypes.func
};
export default Sheep;

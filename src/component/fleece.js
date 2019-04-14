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

    var icon = "assets/fleece.svg";

    if(this.props.branded === true)
    {
      if(this.props.ram === true) icon = "assets/brandedram.svg";
      else icon = "assets/branded.svg";
    }
    else if(this.props.ram === true) icon = "assets/ram.svg";

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>
          <img src={icon} width="120" alt="fleece"/><br/>
          <strong>{this.props.text}</strong><br/>
          Select me!
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

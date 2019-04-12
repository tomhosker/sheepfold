import React from "react";
import Display from "./Display";
import Sheep from "./Sheep";
import Button from "./Button";
import execute from "../logic/execute";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      sheep: null,
      last: null,
      operation: null
    };
  }

  handleClick = buttonName => {
    this.setState(execute(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.message || "Welcome to the fold!"} />
          <div className="divholder">
            <div className="sheepfold">
              <Sheep name="Ewe #1" clickHandler={this.handleClick} />
            </div> <div className="mymenu">
              <Button name="Brand" clickHandler={this.handleClick} />
              <Button name="Breed" clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
    );
  }
}
export default App;

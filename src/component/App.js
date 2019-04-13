import React from "react";
import Display from "./display";
import Fleece from "./fleece";
import Button from "./button";
import execute from "../logic/execute";
import Flock from "../logic/flock";
import Sheep from "../logic/sheep";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to the fold!",
      sheep: null,
      last: null,
      flock: new Flock(),
      breed: false
    };
  }

  handleClick = buttonName => {
    this.setState(execute(this.state, buttonName));
  };

  renderSheep(sheep)
  {
    var name, result = "";
    var ram, branded = false;

    if(sheep.gender === 1)
    {
      name = "Ram #"+sheep.id;
      ram = true;
    }
    else name = "Ewe #"+sheep.id;

    if(sheep.branded === true) branded = true;

    result = <Fleece name={name} ram={ram} branded={branded}
                     clickHandler={this.handleClick} />

    return(result);
  }

  renderFold()
  {
    var result = [];

    for(var i = 0; i < this.state.flock.sheep.length; i++)
    {
      result.push(this.renderSheep(this.state.flock.sheep[i]))
    }

    return(result);
  }

  render()
  {
    var display = <Display value={this.state.message} />;
    var fold = <div className="sheepfold">{this.renderFold()}</div>;

    var result =
      <div className="component-app">
        {display}
        <div className="divholder">
          {fold}
          <div className="mymenu">
            <Button name="Brand" clickHandler={this.handleClick} />
            <Button name="Breed" clickHandler={this.handleClick} />
          </div>
        </div>
      </div>;

    return(result);
  }
}
export default App;

import React from "react";
import Display from "./display";
import Fleece from "./fleece";
import Button from "./button";
import execute from "../logic/execute";
import Flock from "../logic/flock";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to the fold!",
      flock: new Flock(),
      sheep: null
    };
  }

  handleClick = buttonName => {
    this.setState(execute(this.state, buttonName));
  };

  renderSheep(sheep)
  {
    var name = sheep.id.toString();
    var text = "";
    var result;
    var ram = false;
    var branded = sheep.branded;

    if(sheep.gender === 1)
    {
      text = "Ram #";
      ram = true;
    }
    else text = "Ewe #";

    result = <Fleece text={text} name={name} ram={ram} branded={branded}
                     clickHandler={this.handleClick}/>;

    return(result);
  }

  renderFold()
  {
    var result = [];

    for(var i = 0; i < this.state.flock.sheep.length; i++)
    {
      result.push(this.renderSheep(this.state.flock.sheep[i]));
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

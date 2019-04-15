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
      sheep: null,
      newbieGender: "Ewe",
      newbieName: ""
    };
  }

  handleClick = buttonName => {
    this.setState(execute(this.state, buttonName));
  };

  handleChange = event => {
    var newState = this.state;
    newState.newbieGender = event.target.value;
    this.setState(newState);
  };

  handleTextChange = event => {
    var newState = this.state;
    newState.newbieName = event.target.value;
    this.setState(newState);
  };

  renderSheep(sheep)
  {
    var name = sheep.id.toString();
    var text = "";
    var ram = false;
    var branded = sheep.branded;

    if(sheep.name !== "") text = sheep.name;
    else if(sheep.gender === 1) text = "Ram #"+name;
    else text = "Ewe #"+name;

    if(sheep.gender === 1) ram = true;

    var result = <Fleece key={name} name={name} text={text}
                         ram={ram} branded={branded}
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

  renderMenu()
  {
    var message = "Adding a new sheep, sir? "+
                  "Specify his/her name and gender below.";
    var specifyNameText = <small>Name:</small>;
    var specifyNameBox = <textarea value={this.state.value}
                                   onChange={this.handleTextChange}/>;
    var specifyGenderText = <small>Gender:</small>;
    var specifyGenderSelect = <select value={this.state.gender}
                                      onChange={this.handleChange}>
                                <option value="Ewe">Ewe</option>
                                <option value="Ram">Ram</option>
                              </select>;

    var result =
      <div className="mymenu">
        <Button name="Brand" clickHandler={this.handleClick}/>
        <Button name="Breed" clickHandler={this.handleClick}/>
        <Button name="Add" clickHandler={this.handleClick}/>
        <p> {message} </p>
        <p> {specifyNameText} {specifyNameBox} </p>
        <p> {specifyGenderText} {specifyGenderSelect} </p>
      </div>;

    return(result);
  }

  render()
  {
    var display = <Display value={this.state.message} />;
    var fold = <div className="sheepfold">{this.renderFold()}</div>;
    var menu = this.renderMenu();

    var result =
      <div className="component-app">
        {display}
        <div className="divholder">
          {fold}
          {menu}
        </div>
      </div>;

    return(result);
  }
}
export default App;

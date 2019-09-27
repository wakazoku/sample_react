import React, { Component } from "react";
import "./App.css";

class App extends Component {
  input = "";

  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  };

  inputStyle = {
    fontSize: "12px",
    padding: "5px"
  };

  constructor(props) {
    super(props);
    this.state = {
      message: "type your name: "
    };
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: "Hello," + this.input + "!!"
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <form onSubmit={this.doSubmit}>
          <label>
            <span style={this.inputStyle}>Message:</span>
            <input
              type="text"
              style={this.inputStyle}
              onChange={this.doChange}
              required
              pattern="[A-Za-z _,.]+"
              minlength="1"
              maxlength="15"
            />
          </label>
          <input type="submit" style={this.inputStyle} value="click" />
        </form>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Message from "./Message";

class App extends Component {
  input = "";

  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  };

  constructor(props) {
    super(props);
    this.state = {
      message: "type your name: "
    };
    this.doCheck = this.doCheck.bind(this);
  }

  doCheck(event) {
    alert(event.target.value + "は最大10文字で入力してください。");
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <h2>{this.state.message}</h2>
        <Message maxlength="10" onCheck={this.doCheck} />
      </div>
    );
  }
}

export default App;

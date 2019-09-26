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
    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
  }

  doChange(event) {
    this.input = event.target.value;
  }

  doSubmit(event) {
    this.setState({
      message: "Hello, " + this.input + "!!"
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <Message>
          これはコンポーネント内のコンテンツです。
          マルチテキストを分割し、リストにして表示します。
          改行は必要ありません。
        </Message>
      </div>
    );
  }
}

export default App;

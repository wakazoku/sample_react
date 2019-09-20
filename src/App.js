import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Welcome style={msg1} name="Taro" />
          <Welcome style={msg2} name="Jiro" />
        </div>
      </div>
    );
  }
}

const msg1 = {
  fontSize: "20pt",
  fontWeight: "bold",
  padding: "10px",
  color: "white",
  backgroundColor: "darkblue",
  border: "double 5px magenta"
};

const msg2 = {
  fontSize: "16pt",
  fontWeight: "bold",
  color: "white",
  padding: "10px",
  backgroundColor: "cyan"
};

function Welcome(props) {
  return <p style={props.style}>Hello React!! Welcome, {props.name}</p>;
}

export default App;

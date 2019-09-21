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
        <Calc number="100" />
        <Calc number="200" />
        <Calc number="300" />
      </div>
    );
  }
}

const msg = {
  fontSize: "16px",
  fontWeight: "bold",
  padding: "10px",
  color: "white",
  backgroundColor: "darkblue"
};

function Calc(props) {
  let total = 0;
  for (let i = 1; i <= props.number; i++) {
    total += i;
  }
  return (
    <p style={msg}>
      1から{props.number}までの合計は{total}です
    </p>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p>{this.title}</p>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

let data = {
  title: "Title",
  message: "this is sample message."
};

const SampleContext = React.createContext(data);

export default class App extends Component {
  newdata = {
    title: "新しいタイトル",
    message: "これは新しいメッセージです。"
  };

  render() {
    return (
      <div className="App">
        <h1>Context</h1>
        <Title />
        <Message />
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div>
        <h2>{this.context.message}</h2>
      </div>
    );
  }
}

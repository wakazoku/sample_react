import React, { Component } from "react";
import "./App.css";

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px"
  },
  dark: {
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px"
  }
};

const ThemeContext = React.createContext(theme);

export default class App extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div>
        <ThemeContext.Provider value={theme.light}>
          <div style={this.context}>
            <Title value="Content page" />
            <Message value="This is Content Sample" />
            <Message value="※これはテーマのサンプルです。" />
          </div>
        </ThemeContext.Provider>
        <ThemeContext.Provider value={theme.dark}>
          <div style={this.context}>
            <Title value="Content page" />
            <Message value="This is Content Sample" />
            <Message value="※これはテーマのサンプルです。" />
          </div>
        </ThemeContext.Provider>
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div style={this.context}>
        <h2>{this.props.value}</h2>
      </div>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div style={this.context}>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

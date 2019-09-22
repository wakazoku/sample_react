import React, { Component } from "react";
import "./App.css";

class App extends Component {
  msgStyle1 = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  };

  msgStyle2 = {
    fontSize: "24pt",
    color: "white",
    backgroundColor: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  };

  btnStyle = {
    fontSize: "20px",
    padding: "0px 10px"
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: "Hello State.",
      flg: true
    };
    setInterval(() => {
      this.setState(state => ({
        msg: state.msg + "!"
      }));
    }, 1000);
    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    this.setState(state => ({
      counter: state.counter + 1,
      msg: "count: " + state.counter,
      flg: !state.flg
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p style={this.msg1Style}>{this.props.msg}</p>
        <div>
          {this.state.flg ? (
            <p style={this.msgStyle1}>count: {this.state.msg}</p>
          ) : (
            <p style={this.msgStyle2}>{this.state.msg}です。</p>
          )}
        </div>
        <button style={this.btnStyle} onClick={this.doAction}>
          click
        </button>
      </div>
    );
  }
}

export default App;

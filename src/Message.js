import React, { Component } from "react";

class Message extends Component {
  li = {
    fontSize: "16pt",
    color: "#06",
    margin: "0px",
    padding: "0px"
  };

  render() {
    let content = this.props.children;
    let attr = content.split("。");
    let attr2 = [];

    attr.map(item => {
      return item.trim() !== "" && attr2.push(item);
    });

    let list = attr2.map((value, key) => (
      <li style={this.li} key={key}>
        {value}
      </li>
    ));
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    );
  }
}

export default Message;

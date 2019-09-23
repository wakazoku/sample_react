import React, { Component } from "react";
import "./TodoListItem.css";

class TodoListItem extends Component {
  render() {
    const { title, description, number } = this.props;

    return (
      <div className="TodoListItem">
        <div className="TodoListItem-title">No: {number}</div>
        <div className="TodoListItem-title">title: {title}</div>
        <div className="TodoListItem-title">description: {description}</div>
      </div>
    );
  }
}

export default TodoListItem;

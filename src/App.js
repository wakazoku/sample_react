import React, { Component } from "react";
import "./App.css";
import "./TodoListItem";
import TodoListItem from "./TodoListItem";

class App extends Component {
  state = {
    todoList: []
  };

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    const titleElements = e.target.elements.title;
    const descriptionElements = e.target.elements.description;

    if (!titleElements.value || !descriptionElements) return;

    this.setState(
      {
        todoList: this.state.todoList.concat({
          title: titleElements.value,
          description: descriptionElements.value
        })
      },
      () => {
        titleElements.value = "";
        descriptionElements.value = "";
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <div>
          <form id="todoListForm" onSubmit={this.addTodo}>
            <div>
              <p>
                title:
                <input type="text" id="title" placeholder="title" />
              </p>
              <p>
                description:
                <textarea id="description" placeholder="description" />
              </p>
            </div>
            <div>
              <button type="submit">登録</button>
            </div>
          </form>
          <div>
            {this.state.todoList.map(todo => (
              <TodoListItem
                key={todo.title}
                title={todo.title}
                description={todo.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

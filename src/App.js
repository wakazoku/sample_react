import React, { Component } from "react";
import "./App.css";
import "./TodoListItem";
import TodoListItem from "./TodoListItem";

// 以下記事を参考にしています。
// https://qiita.com/rioc/items/8723c236e10d989e827d

class App extends Component {
  state = {
    todoList: []
  };

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }

  number = 1;

  addTodo(e) {
    e.preventDefault();

    const titleElements = e.target.elements.title;
    const descriptionElements = e.target.elements.description;

    if (!titleElements.value || !descriptionElements)
      return alert("入力がないです");

    this.setState(
      {
        todoList: this.state.todoList.concat({
          number: this.number++,
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
            <div className="todoListFormInput">
              <p>
                title:
                <input type="text" id="title" placeholder="title" />
              </p>
              <p>
                description:
                <textarea id="description" placeholder="description" />
              </p>
            </div>
            <div className="todoListFormControl">
              <p>
                <button type="submit">登録</button>
              </p>
            </div>
          </form>
          <div>
            {this.state.todoList.map(todo => (
              <TodoListItem
                key={todo.number}
                number={todo.number}
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

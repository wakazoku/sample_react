import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

// ステートの値
let state_value = {
  counter: 0,
  message: "COUNTER"
};

// レデューサー
function counter(state = state_value, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
        message: "INCREMENT"
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
        message: "DECREMENT"
      };
    default:
      return state;
  }
}

// ストアを作成
let store = createStore(counter);

// 表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React, { Component } from "react";
import "./Content.css";
import TodoList from "../todolist/TodoList";

export class Content extends Component {
  render() {
    return (
      <div className="Content">
        <TodoList />
      </div>
    );
  }
}

export default Content;

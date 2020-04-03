import React, { Component } from "react";
import { connect } from "react-redux";
import { AppState } from "../../reducer/store";
import TodoItem from "../todoitem/TodoItem";
import { TodoEntity } from "../../entity";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { AppActions } from "../../actionTypes/app";
import { addTodo, deleteTodo } from "../../actions/todo";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./TodoList.css";

type TodoListProps = ConnectedState & ConnectedDispatch;

type TodoListState = {
  newTodoTitle: string;
};

export class TodoList extends Component<TodoListProps, TodoListState> {
  state = {
    newTodoTitle: "",
  };

  setNewTodoTitle = (title: string): void => {
    this.setState({
      newTodoTitle: title,
    });
  };

  render(): React.ReactNode {
    const { newTodoTitle } = this.state;
    const { todos, deleteTodo, addTodo } = this.props;
    return (
      <div className="TodoList">
        <div className="TodoList-form">
          <input
            className="form-control"
            type="text"
            placeholder="Enter todo"
            onChange={(e) => {
              this.setNewTodoTitle(e.target.value);
            }}
            value={newTodoTitle}
          />
          <button
            onClick={() => {
              if (newTodoTitle.trim().length !== 0) {
                addTodo(TodoEntity.create(newTodoTitle));
              }
              this.setNewTodoTitle("");
            }}
          >
            + Add todo
          </button>
        </div>
        {todos.map((it) => {
          return (
            <TodoItem
              key={it.uid}
              todo={it}
              onRemove={(todoEntity: TodoEntity) => deleteTodo(todoEntity.uid)}
            />
          );
        })}
      </div>
    );
  }
}

interface ConnectedState {
  todos: TodoEntity[];
}

interface ConnectedDispatch {
  addTodo: (todoEntity: TodoEntity) => void;
  deleteTodo: (todoId: string) => void;
}

const mapStateToProps = (state: AppState): ConnectedState => ({
  todos: state.todos,
});

const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>
): ConnectedDispatch => ({
  addTodo: bindActionCreators<any, any>(
    addTodo,
    dispatch as Dispatch<AnyAction>
  ),
  deleteTodo: bindActionCreators<any, any>(
    deleteTodo,
    dispatch as Dispatch<AnyAction>
  ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TodoList);

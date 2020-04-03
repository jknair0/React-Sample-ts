import React, { Component } from "react";
import { TodoEntity } from "../../entity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "./components/CheckBox";
import "./TodoItem.css";
import { Dispatch, bindActionCreators, AnyAction } from "redux";
import { editTodo } from "../../actions/todo";
import { connect } from "react-redux";
import { AppActions } from "../../actionTypes/app";

interface TodoItemProps {
  todo: TodoEntity;
  onRemove: (todo: TodoEntity) => void;
}

type TodoCompoundProps = TodoItemProps & LinkDispathProps;

export class TodoItem extends Component<TodoCompoundProps, any> {
  render() {
    const { todo, onRemove, editTodo } = this.props;
    return (
      <div className="Todo">
        <CheckBox
          checked={todo.done}
          title={todo.title}
          onCheckChanged={(checked) => {
            console.warn("check changed", checked);
            editTodo(todo.changeDone(checked));
          }}
        />
        <div className="Todo-close">
          <FontAwesomeIcon
            size="1x"
            color="red"
            icon={faWindowClose}
            onClick={() => onRemove(todo)}
          />
        </div>
      </div>
    );
  }
}

interface LinkDispathProps {
  editTodo: (updatedTodo: TodoEntity) => void;
}

const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>
): LinkDispathProps => ({
  editTodo: bindActionCreators(editTodo, dispatch as Dispatch<AnyAction>),
});

const connector = connect(null, mapDispatchToProps);

export default connector(TodoItem);

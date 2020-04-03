import { TodoEntity } from "../entity";
import {
  TodoActionTypes,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actionTypes/todo";
import { Reducer } from "redux";

const initialState: TodoEntity[] = [];

const todoReducer: Reducer<TodoEntity[], TodoActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.newTodo];
    }
    case DELETE_TODO: {
      return state.filter((it) => it.uid !== action.todoId);
    }
    case EDIT_TODO: {
      return state.map((it) =>
        it.uid === action.updatedTodo.uid ? action.updatedTodo : it
      );
    }
    default:
      return state;
  }
};

export { todoReducer };

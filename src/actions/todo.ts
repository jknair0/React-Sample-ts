import { TodoEntity } from "../entity";
import { AppActions } from "../actionTypes/app";
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes/todo";

export const addTodo = (todoEntity: TodoEntity): AppActions => ({
  type: ADD_TODO,
  newTodo: todoEntity,
});

export const deleteTodo = (todoId: string): AppActions => ({
  type: DELETE_TODO,
  todoId: todoId,
});

export const editTodo = (updated: TodoEntity): AppActions => ({
  type: EDIT_TODO,
  updatedTodo: updated,
});

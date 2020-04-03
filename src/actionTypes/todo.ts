import { TodoEntity } from "../entity";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  newTodo: TodoEntity;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  todoId: string;
}

export interface EditTodoAction {
  type: typeof EDIT_TODO;
  updatedTodo: TodoEntity;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | EditTodoAction;

import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);

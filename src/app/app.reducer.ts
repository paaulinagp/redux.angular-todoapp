import { ActionReducerMap } from "@ngrx/store";
import { Filters } from "./filters/filter.actions";
import { filterReducer } from "./filters/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
  todos: Todo[],
  filter: Filters
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
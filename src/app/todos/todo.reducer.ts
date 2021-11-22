import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, eliminate, toggle, toggleAll, update, cleanCompleted } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Hello world'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { content }) => [...state, new Todo(content) ]),
  on(update, (state, {id, content }) => {
    return state.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          content: content
        }
      }
      return todo;
    });
  }),
  on(eliminate, (state, { id }) => state.filter(todo => todo.id !== id )),
  on(cleanCompleted, (state) => state.filter(todo => !todo.status) ),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if(todo.id === id) {
        return {
          ...todo,
          status: !todo.status
        }
      }
      return todo;
    });
  }),
  on(toggleAll, (state, { status }) => state.map((todo) => {
    return { ...todo, status: status }
  }))

);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { create, toggle, update } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Hello world'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { content }) => [...state, new Todo(content) ]),
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
  })

);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
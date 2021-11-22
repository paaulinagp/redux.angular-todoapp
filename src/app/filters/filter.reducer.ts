import { createReducer, on } from '@ngrx/store';
import { setFilter, Filters } from './filter.actions'

export const initialState: Filters = 'all';

const _filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter } ) => state),
  

);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
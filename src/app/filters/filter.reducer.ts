import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, Filters } from './filter.actions'

export const initialState: Filters = 'all';

const _filterReducer = createReducer<Filters, Action>(
  initialState,
  on(setFilter, (state, { filter } ) => filter),
  

);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
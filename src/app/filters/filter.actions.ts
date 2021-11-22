import { createAction, props } from '@ngrx/store';

export type Filters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[FILTERS] Set filter',
  props<{filter: Filters }>()
);
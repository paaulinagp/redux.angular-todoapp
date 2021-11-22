import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create Todo',
  props<{content: string}>()
);

export const update = createAction(
  '[TODO] Update Todo',
  props<{ id: number, content: string }>()
);

export const eliminate = createAction(
  '[TODO] Delete Todo',
  props<{id: number}>()
);

export const cleanCompleted = createAction('[TODO] Clean compleated Todo');

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll Todo',
  props<{status: boolean}>()
);

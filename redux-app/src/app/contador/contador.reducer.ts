import { Action, createAction, createReducer, on } from "@ngrx/store";
import * as ContadorActions from './contador.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(ContadorActions.incrementar, state => state + 1),
  on(ContadorActions.decrementar, state => state - 1),
  on(ContadorActions.multiplicar, (state, { multiplicador }) => state * multiplicador),
  on(ContadorActions.dividir, (state, { divisor }) => state / divisor),
  on(ContadorActions.resetear, () => initialState)
);
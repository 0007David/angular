import { createAction, props } from "@ngrx/store";


export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';
export const RESETEAR = '[Contador] Resetear';

export const incrementar = createAction(
  INCREMENTAR
);

export const decrementar = createAction(
  DECREMENTAR
);

export const multiplicar = createAction(
  MULTIPLICAR,
  props<{ multiplicador: number }>()
);

export const dividir = createAction(
  DIVIDIR,
  props<{ divisor: number }>()
);

export const resetear = createAction(
  RESETEAR
);


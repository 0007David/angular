import { createFeatureSelector } from '@ngrx/store';

export const selectContador = createFeatureSelector<number>('contador');
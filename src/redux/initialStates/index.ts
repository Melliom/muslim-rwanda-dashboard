import { example, Iexample } from './example';

export interface IRootState {
  example: Iexample;
}

export const initialState: IRootState = {
  example,
};

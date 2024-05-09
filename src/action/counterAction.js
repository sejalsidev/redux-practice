import { INCREMENT, DECREMENT } from './actionType';

export const increment = (payload) => ({
  type: INCREMENT,
  payload
});

export const decrement = (payload) => ({
  type: DECREMENT,
  payload
});
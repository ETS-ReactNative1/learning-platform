import { ADD_TEXT } from '../types';

const handlers = {
  DEFAULT: state => state,
  [ADD_TEXT]: (state, { payload }) => ({
    ...state,
    textItems: [...state.textItems, payload],
  }),
};

export const TextTrainCreatorReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

import { ADD_WORDS_TO_ARRAY } from '../types';

const handlers = {
  DEFAULT: state => state,
  [ADD_WORDS_TO_ARRAY]: (state, { payload }) => {
    function wordsToArray() {
      return payload
        .split(' ')
        .filter(v => v !== '')
        .map((v, i) => ({
          id: i,
          rightValue: v,
          trainValue: null,
        }));
    }

    return {
      ...state,
      initialUserText: payload,
      wordsArray: wordsToArray(),
    };
  },
};

export const TextTrainCreatorReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

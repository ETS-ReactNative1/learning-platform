import { ADD_WORDS_BY_TEACHER, UPDATE_FILLED_BLANKS_COUNT } from '../types';

const handlers = {
  DEFAULT: state => state,
  [ADD_WORDS_BY_TEACHER]: (state, { payload }) => {
    function blanksCounter() {
      let count = 0;

      payload.forEach(v => {
        const blankValue = v.trainWord.split('').filter(k => k === '_').length;
        count += blankValue;
      });

      return count;
    }

    return {
      ...state,
      wordsByTeacher: payload,
      blanksCount: blanksCounter(),
    };
  },
  [UPDATE_FILLED_BLANKS_COUNT]: (state, { payload }) => ({
    ...state,
    filledBlanksCount: payload,
  }),
};

export const FillBlanksExerciseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

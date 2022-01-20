import { ADD_TEXT, ADD_WORDS_OBJECTS } from '../types';

const handlers = {
  DEFAULT: state => state,
  [ADD_TEXT]: (state, { payload }) => ({
    ...state,
    textString: payload,
  }),
  [ADD_WORDS_OBJECTS]: (state, { payload }) => ({
    ...state,
    wordObjects: payload,
  }),
};

export const TextTrainCreatorReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};

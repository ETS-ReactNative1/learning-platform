import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { TextTrainCreatorContext } from './TextTrainCreatorContext';
import { TextTrainCreatorReducer } from './TextTrainCreatorReducer';
import { ADD_WORDS_TO_ARRAY } from '../types';

const TextTrainCreatorState = ({ children }) => {
  const initialState = {
    wordsArray: [],
    initialUserText: '',
  };

  const [state, dispatch] = useReducer(TextTrainCreatorReducer, initialState);

  const wordsToArray = userText => {
    dispatch({ type: ADD_WORDS_TO_ARRAY, payload: userText });
  };

  const { wordsArray, initialUserText } = state;

  return (
    <TextTrainCreatorContext.Provider
      value={{ wordsArray, initialUserText, wordsToArray }}
    >
      {children}
    </TextTrainCreatorContext.Provider>
  );
};

TextTrainCreatorState.propTypes = {
  children: PropTypes.func,
};

export default TextTrainCreatorState;

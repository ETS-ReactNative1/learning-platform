import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { TextTrainCreatorContext } from './TextTrainCreatorContext';
import { TextTrainCreatorReducer } from './TextTrainCreatorReducer';
import { ADD_TEXT } from '../types';

const TextTrainCreatorState = ({ children }) => {
  const initialState = {
    textItems: [],
  };

  const [state, dispatch] = useReducer(TextTrainCreatorReducer, initialState);

  const addNewText = text => {
    dispatch({ type: ADD_TEXT, payload: text });
  };

  const { textItems } = state;

  return (
    <TextTrainCreatorContext.Provider value={{ textItems, addNewText }}>
      {children}
    </TextTrainCreatorContext.Provider>
  );
};

TextTrainCreatorState.propTypes = {
  children: PropTypes.func,
};

export default TextTrainCreatorState;

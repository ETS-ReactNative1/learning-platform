import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { TextTrainCreatorContext } from './TextTrainCreatorContext';
import { TextTrainCreatorReducer } from './TextTrainCreatorReducer';
import { ADD_TEXT, ADD_WORDS_OBJECTS } from '../types';

const TextTrainCreatorState = ({ children }) => {
  const initialState = {
    textString: 'dog cat coconut',
    wordObjects: [],
  };

  const [state, dispatch] = useReducer(TextTrainCreatorReducer, initialState);

  const addNewText = text => {
    dispatch({ type: ADD_TEXT, payload: text });
  };

  const addWordsObj = array => {
    dispatch({
      type: ADD_WORDS_OBJECTS,
      payload: array,
    });
  };

  const { textString, wordObjects } = state;

  return (
    <TextTrainCreatorContext.Provider
      value={{ textString, wordObjects, addNewText, addWordsObj }}
    >
      {children}
    </TextTrainCreatorContext.Provider>
  );
};

TextTrainCreatorState.propTypes = {
  children: PropTypes.func,
};

export default TextTrainCreatorState;

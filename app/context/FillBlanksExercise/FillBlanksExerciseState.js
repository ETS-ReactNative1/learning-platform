import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { FillBlanksExerciseContext } from './FillBlanksExerciseContext';
import { FillBlanksExerciseReducer } from './FillBlanksExerciseReducer';
import { ADD_WORDS_BY_TEACHER, UPDATE_FILLED_BLANKS_COUNT } from '../types';

const FillBlanksExerciseState = ({ children }) => {
  const initialState = {
    blanksCount: 0,
    filledBlanksCount: 0,
    wordsByTeacher: [],
  };

  const [state, dispatch] = useReducer(FillBlanksExerciseReducer, initialState);

  const updateFilledBlanksCount = count => {
    dispatch({ type: UPDATE_FILLED_BLANKS_COUNT, payload: count });
  };

  const addWordsByTeacher = () => {
    const words = [
      { id: 1, trainWord: 't_st', word: 'test' },
      { id: 2, trainWord: 'te_t', word: 'test' },
    ];

    dispatch({ type: ADD_WORDS_BY_TEACHER, payload: words });
  };

  const { wordsByTeacher, blanksCount, filledBlanksCount } = state;

  return (
    <FillBlanksExerciseContext.Provider
      value={{
        blanksCount,
        filledBlanksCount,
        wordsByTeacher,
        addWordsByTeacher,
        updateFilledBlanksCount,
      }}
    >
      {children}
    </FillBlanksExerciseContext.Provider>
  );
};

FillBlanksExerciseState.propTypes = {
  children: PropTypes.object,
};

export default FillBlanksExerciseState;

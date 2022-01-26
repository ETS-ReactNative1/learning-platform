import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FillBlanksExerciseContext } from '../../context/FillBlanksExercise/FillBlanksExerciseContext';

const BlankInputWrap = styled.input`
  border: 1px solid #cdcdcd;
  width: 30px;
  text-align: center;
  font-size: 20px;
  line-height: 22px;
  padding: 2px;
  outline: none;
`;

const BlankInput = ({ correctValue }) => {
  const { filledBlanksCount, updateFilledBlanksCount } = useContext(
    FillBlanksExerciseContext,
  );
  const [value, setValue] = useState('');

  const isValid = value === correctValue;

  const isInputEmpty = value === '';

  function getBorderColor() {
    if (isInputEmpty) {
      return '#cdcdcd';
    }

    if (isValid) {
      return 'green';
    }

    return 'red';
  }

  function onChange(e) {
    setValue(e.target.value);
    if (e.target.value !== '') {
      updateFilledBlanksCount(filledBlanksCount + 1);
    } else {
      updateFilledBlanksCount(filledBlanksCount - 1);
    }
  }

  return (
    <BlankInputWrap
      type="input"
      value={value}
      maxLength="1"
      style={{ borderColor: getBorderColor() }}
      onChange={onChange}
    />
  );
};

BlankInput.propTypes = {
  correctValue: PropTypes.string,
};

export default BlankInput;

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlankInputWrap = styled.div`
  position: relative;
  width: 30px;
  height: 30px;

  input {
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 22px;
    padding: 2px;
    outline: none;
    z-index: 10;
    position: relative;
  }

  .BlankInput__result {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
  }

  @keyframes showmistake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-2px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(2px);
    }
  }

  @keyframes showcorrect {
    0% {
      box-shadow: 0 0 0 green;
    }

    40% {
      box-shadow: 0 0 5px 1px green;
    }

    50% {
      box-shadow: 0 0 3px 1px pink;
    }

    100% {
      box-shadow: 0 0 10px 1px green;
    }
  }
`;

const BlankInput = ({
  correctValue,
  increaseFilledBlanksCount,
  decreaseFilledBlanksCount,
}) => {
  const [value, setValue] = useState('');

  const isValid = value === correctValue;

  const isInputEmpty = value === '';

  function getBorderColor() {
    const mistake = {
      borderColor: 'red',
      animationName: 'showmistake',
      animationIterationCount: 'infinite',
      animationDuration: '1s',
    };

    const empty = {
      borderColor: 'rgb(133,80,255)',
    };

    const correct = {
      borderColor: 'green',
      animationName: 'showcorrect',
      animationIterationCount: 'linear',
      animationDuration: '2s',
    };

    if (isInputEmpty) {
      return empty;
    }

    if (isValid) {
      return correct;
    }

    return mistake;
  }

  function onChange(e) {
    setValue(e.target.value);
    if (value !== '' && e.target.value !== '') {
      return;
    }

    if (e.target.value !== '') {
      increaseFilledBlanksCount();
    } else {
      decreaseFilledBlanksCount();
    }
  }

  return (
    <BlankInputWrap>
      <input type="input" value={value} maxLength="1" onChange={onChange} />
      <div className="BlankInput__result" style={getBorderColor()} />
    </BlankInputWrap>
  );
};

BlankInput.propTypes = {
  correctValue: PropTypes.string,
  increaseFilledBlanksCount: PropTypes.func,
  decreaseFilledBlanksCount: PropTypes.func,
};

export default BlankInput;

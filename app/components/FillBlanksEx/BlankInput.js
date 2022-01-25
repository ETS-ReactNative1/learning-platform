import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BlankInputWrap = styled.input`
  border: 1px solid #cdcdcd;
  width: 20px;
  font-size: 20px;
  line-height: 22px;
  padding: 2px;
  outline: none;
`;

const BlankInput = ({ correctValue }) => {
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

  return (
    <BlankInputWrap
      type="input"
      value={value}
      maxLength="1"
      style={{ borderColor: getBorderColor() }}
      onChange={e => setValue(e.target.value)}
    />
  );
};

BlankInput.propTypes = {
  correctValue: PropTypes.string,
};

export default BlankInput;

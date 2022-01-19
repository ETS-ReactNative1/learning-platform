import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextItemWrapper = styled.div`
  margin: 4px;
  position: relative;
  display: inline-block;
  color: #ffffff;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 20px;
    background-color: #43008057;
    padding: 4px 8px;
    border-radius: 5px;

    &:hover {
      background-color: #43008087;
    }
  }

  &:hover button {
    display: block;
  }

  button {
    position: absolute;
    background-color: #cccccc;
    border-radius: 50%;
    font-size: 12px;
    light-height: 12px;
    color: #000000;
    cursor: pointer;
    padding: 4px 8px;
    display: none;
    right: -10px;

    &:hover {
      color: #ffffff;
    }
  }

  .TextItem__delete {
    bottom: -10px;
  }

  .TextItem__edit {
    top: -10px;
  }
`;

function TextItem(props) {
  return (
    <TextItemWrapper>
      <button
        className="TextItem__delete"
        type="button"
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        <i className="far fa-trash-alt" />
      </button>

      <button
        className="TextItem__edit"
        type="button"
        onClick={() => {
          console.log(2);
        }}
      >
        <i className="far fa-edit" />
      </button>
      <p>{props.text}</p>
    </TextItemWrapper>
  );
}

TextItem.propTypes = {
  text: PropTypes.string,
};

export default TextItem;

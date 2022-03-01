import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Wrapper = styled.div`
  border: 2px solid #cccccc;
  border-radius: 5px;
  margin-top: 8px;
  padding: 4px;
  cursor: pointer;
  background-color: ${({ isDragging }) =>
    isDragging ? 'lightgreen' : 'white'};
`;

const ColumnElement = ({ word, index, wordId }) => (
  <Draggable draggableId={wordId} index={index}>
    {(provided, snapshot) => (
      <Wrapper
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
      >
        {word}
      </Wrapper>
    )}
  </Draggable>
);

ColumnElement.propTypes = {
  word: PropTypes.string,
  index: PropTypes.number,
  wordId: PropTypes.string,
};

export default ColumnElement;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import ColumnElement from './ColumnElement';

const ColumnWrapper = styled.div`
  border: 2px solid #cdcdcd;
  border-radius: 5px;
  margin: 8px;
`;

const Title = styled.h3`
  margin: 8px;
`;
const List = styled.div`
  padding: 8px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? 'lightgreen' : 'white'};
`;

const Column = ({ title, words, columnId }) => (
  // <Draggable draggableId={columnId} index={index}>
  //   {() => (
  <ColumnWrapper>
    <Title>{title}</Title>
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <List
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {words.map((el, i) => (
            <ColumnElement
              key={el.id}
              word={el.word}
              index={i}
              wordId={el.id}
            />
          ))}
          {provided.placeholder}
        </List>
      )}
    </Droppable>
  </ColumnWrapper>
  //   )}
  // </Draggable>
);

Column.propTypes = {
  title: PropTypes.string,
  columnId: PropTypes.string,
  words: PropTypes.array,
  index: PropTypes.number,
};

export default Column;

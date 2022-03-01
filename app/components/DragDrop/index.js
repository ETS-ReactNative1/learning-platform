import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './column';

const DragDrop = () => {
  const [state, setState] = useState(initialData);

  const onDragStart = () => {
    document.body.style.color = 'orange';
  };

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = state.columns[source.droppableId];
    const newWordIds = Array.from(column.WordIds);
    newWordIds.splice(source.index, 1);
    newWordIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      wordIds: newWordIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      {state.columnOrder.map((columnId, index) => {
        const column = state.columns[columnId];
        const words = column.wordIds.map(wordId => state.words[wordId]);

        return (
          <Column
            index={index}
            key={column.id}
            columnId={column.id}
            column={column}
            words={words}
            title={column.title}
          />
        );
      })}
    </DragDropContext>
  );
};

export default DragDrop;

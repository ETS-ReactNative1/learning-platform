import React from 'react';
import initialData from './initialData';
import Column from './column';

const DragDrop = () => {
  const state = initialData;

  return state.columnOrder.map(columnId => {
    const column = state.columns[columnId];
    const words = column.wordIds.map(wordId => state.words[wordId]);

    return <Column key={column.id} column={column} words={words} />;
  });
};

export default DragDrop;

import React from 'react';
import initialData from './initialData';
import Column from './column';
// import styled from 'styled-components';

const DragDrop = () => {
  const state = initialData;

  const renderColumns = () =>
    state.columnOrder.map(columnId => {
      const column = state.columns[columnId];
      const words = column.wordIds.map(wordId => state.words[wordId]);

      return (
        <Column
          key={column.id}
          column={column}
          title={column.title}
          words={words}
        />
      );
    });

  return (
    <div>
      <h2>DragDrop</h2>
      {renderColumns()}
    </div>
  );
};

export default DragDrop;

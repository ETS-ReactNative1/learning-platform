import React, { useContext } from 'react';
import styled from 'styled-components';
import { TextTrainCreatorContext } from '../../context/TextTrainCreator/TextTrainCreatorContext';
import TextItem from './TextItem';

const TextEditorWrapper = styled.div`
  min-height: 200px;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  .TextEditor__result {
    padding: 4px;
    border: 1px solid #cdcdcd;
    min-height: 200px;
    min-width: 300px;
    margin: 8px 0;
  }

  button {
    margin: 8px 0;
    border: 1px solid #cdcdcd;
  }
`;

function TextEditor() {
  const { wordsArray } = useContext(TextTrainCreatorContext);

  const renderEditableWords = () =>
    wordsArray.map(v => <TextItem wordId={v.id}>{v.rightValue}</TextItem>);

  return (
    <TextEditorWrapper>
      <div>
        <p>2 шаг:</p>
        <p>Нажимайте на слова, в которые нужно добавить пропуски</p>
      </div>

      <div className="TextEditor__result">
        {wordsArray.length > 0 && renderEditableWords()}
      </div>
      <button type="button" onClick={() => console.log(1)}>
        Далее
      </button>
    </TextEditorWrapper>
  );
}

export default TextEditor;

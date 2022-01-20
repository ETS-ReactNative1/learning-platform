import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextTrainCreatorContext } from '../../context/TextTrainCreator/TextTrainCreatorContext';
import TextItem from './TextItem';
// import UserTextToObjects from './UserTextToObjects';

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
  const { wordObjects } = useContext(TextTrainCreatorContext);

  // if (textString.length !== 0) {
  //   StringToArrayOfOb(textString);
  // }

  // const renderText = () => {
  //   const text = textString.split(' ').map(v => {
  //     if (v.trim() !== '') {
  //       return <TextItem>{v}</TextItem>;
  //     }
  //   });
  //   return text;
  // };

  console.log(wordObjects);
  return (
    <TextEditorWrapper>
      <div>
        <p>2 шаг:</p>
        <p>Нажимайте на слова, в которые нужно добавить пропуски</p>
      </div>

      <div className="TextEditor__result">
        {/* {textString.length > 0 && renderText()} */}
      </div>
      <button type="button" onClick={() => console.log(1)}>
        Далее
      </button>
    </TextEditorWrapper>
  );
}

export default TextEditor;

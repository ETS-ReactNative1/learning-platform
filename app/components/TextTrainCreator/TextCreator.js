import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TextTrainCreatorContext } from '../../context/TextTrainCreator/TextTrainCreatorContext';

const TextCreatorWrapper = styled.div`
  min-height: 200px;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  textarea {
    padding: 16px;
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

function TextCreator() {
  const { wordsToArray } = useContext(TextTrainCreatorContext);
  const [value, setValue] = useState('');

  const pushNewText = () => {
    wordsToArray(value);
    setValue('');
  };

  return (
    <TextCreatorWrapper>
      <div>
        <p>1 шаг:</p>
        <p>Добавьте текст\слова целиком</p>
      </div>

      <textarea value={value} onChange={e => setValue(e.target.value)} />
      <button type="button" onClick={() => pushNewText()}>
        Далее
      </button>
    </TextCreatorWrapper>
  );
}

export default TextCreator;

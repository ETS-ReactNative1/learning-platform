import React, { useContext } from 'react';
import styled from 'styled-components';
import { TextTrainCreatorContext } from '../../context/TextTrainCreator/TextTrainCreatorContext';
import AddText from './AddText';
import TextItem from './TextItem';

const TextTrainCreatorWrapper = styled.div`
  display: flex;
  width: 100%;

  .TextTrainCreator__result {
    display: flex;
    width: 100%;
    min-height: 200px;
    padding: 16px;
    border: 1px solid #cccccc;
    margin-top: 16px;
  }
`;

function TextTrainCreator() {
  const { textItems } = useContext(TextTrainCreatorContext);

  const renderItems = () => {
    if (textItems.length !== 0) {
      return textItems.map(v => <TextItem text={v} />);
    }
  };

  return (
    <TextTrainCreatorWrapper>
      <div>
        <h3>Создание текста с пропущенными словами\символами</h3>
        <AddText />
        <p>Результат:</p>
        <div className="TextTrainCreator__result">{renderItems()}</div>
      </div>
    </TextTrainCreatorWrapper>
  );
}

export default TextTrainCreator;

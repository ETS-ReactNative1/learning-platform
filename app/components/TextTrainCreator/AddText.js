import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TextTrainCreatorContext } from '../../context/TextTrainCreator/TextTrainCreatorContext';

const AddTextButtonWrapper = styled.button`
  display: inline-block;
  vertical-align: baseline;
  padding: 8px;
  border: 1px solid #cccccc;
  cursor: pointer;
  margin: 4px 0;
`;

const AddTextWrapper = styled.button`
  display: flex;
  flex-direction: column;
`;

const AddTextTextarea = styled.textarea`
  border: 1px solid #cccccc;
  margin: 4px 0;
  margin-right: 8px;
  width: 100%;
  padding: 8px;
`;

const AddTextButtonOk = styled.button`
  border: 1px solid green;
  padding: 4px;
  cursor: pointer;
`;

const AddTextTextareaWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function AddText() {
  const [isShow, setIsShow] = useState(true);
  const [value, setValue] = useState('');
  const { addNewText } = useContext(TextTrainCreatorContext);

  const pushNewText = () => {
    addNewText(value);
    setValue('');
  };

  return (
    <AddTextWrapper>
      <AddTextButtonWrapper type="button" onClick={() => setIsShow(!isShow)}>
        Создать текст
      </AddTextButtonWrapper>
      {isShow && (
        <AddTextTextareaWrapper>
          <AddTextTextarea
            placeholder="Введите сюда текст"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <AddTextButtonOk type="button" onClick={() => pushNewText(value)}>
            OK
          </AddTextButtonOk>
        </AddTextTextareaWrapper>
      )}
    </AddTextWrapper>
  );
}

export default AddText;

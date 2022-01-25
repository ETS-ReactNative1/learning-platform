import React, { useState } from 'react';
import styled from 'styled-components';
import ShowingFinish from '../ShowingFinish';
import BlankInputWrap from './BlankInput';

const FillBlanksWrap = styled.div`
  section {
    display: flex;
    margin: 16px 0;
    border: 1px solid #cdcdcd;
    padding: 16px;
  }
`;

const TrainingWord = styled.div`
  margin: 8px;
  font-size: 20px;
  line-height: 22px;
  font-family: 'Arial';

  span {
    margin: 2px;
  }
`;

const words = [
  { id: 1, trainWord: 't_st', word: 'test' },
  { id: 2, trainWord: 'te_t', word: 'test' },
  { id: 3, trainWord: 'd__g_ee', word: 'dwegpee' },
];

function FillBlanks() {
  const createTrainingWord = (trainWord, word) =>
    trainWord.split('').map((v, i) => {
      if (v === '_') {
        const valueFromWord = word[i];
        return <BlankInputWrap correctValue={valueFromWord} />;
      }
      return <span>{v}</span>;
    });

  const renderWords = () =>
    words.map(el => (
      <TrainingWord key={el.id}>
        {createTrainingWord(el.trainWord, el.word)}
      </TrainingWord>
    ));

  return (
    <FillBlanksWrap>
      <p>Задание: Заполните пробелы в словах</p>
      <section>{renderWords()}</section>
      <ShowingFinish />
    </FillBlanksWrap>
  );
}

export default FillBlanks;

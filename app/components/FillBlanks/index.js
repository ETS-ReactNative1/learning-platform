import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FillBlanksExerciseContext } from '../../context/FillBlanksExercise/FillBlanksExerciseContext';
import ShowingFinish from '../ShowingFinish';
import BlankInput from './BlankInput';

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

function FillBlanks() {
  const { wordsByTeacher, addWordsByTeacher } = useContext(
    FillBlanksExerciseContext,
  );

  useEffect(() => {
    addWordsByTeacher();
  }, []);

  const createTrainingWord = (trainWord, word) =>
    trainWord.split('').map((v, i) => {
      if (v === '_') {
        const valueFromWord = word[i];
        return <BlankInput key={`${i}input`} correctValue={valueFromWord} />;
      }
      return <span key={`${i}word`}>{v}</span>;
    });

  const renderWords = () =>
    wordsByTeacher.map(el => (
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

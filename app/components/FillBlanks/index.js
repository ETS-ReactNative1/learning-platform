import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  font-size: 22px;
  line-height: 24px;
  margin: 0 16px;
  display: flex;

  span {
    margin: 4px;
  }
`;

function FillBlanks({ exercise }) {
  const wordsByTeacher = exercise.words;

  let blanksCount = 0;

  const [filledBlanksCount, setFilledBlanksCount] = useState(0);

  function increaseFilledBlanksCount() {
    setFilledBlanksCount(filledBlanksCount + 1);
  }
  function decreaseFilledBlanksCount() {
    setFilledBlanksCount(filledBlanksCount - 1);
  }

  const createTrainingWord = (trainWord, word) =>
    trainWord.split('').map((v, i) => {
      if (v === '_') {
        blanksCount += 1;
        const valueFromWord = word[i];
        return (
          <BlankInput
            key={`${i}input`}
            correctValue={valueFromWord}
            decreaseFilledBlanksCount={decreaseFilledBlanksCount}
            increaseFilledBlanksCount={increaseFilledBlanksCount}
          />
        );
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
      <ShowingFinish
        blanksCount={blanksCount}
        filledBlanksCount={filledBlanksCount}
      />
    </FillBlanksWrap>
  );
}

FillBlanks.propTypes = {
  exercise: PropTypes.object,
};

export default FillBlanks;

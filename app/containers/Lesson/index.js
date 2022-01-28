import React from 'react';
import styled from 'styled-components';
import Alphabet from 'components/Alphabet';
import LearningNewWords from '../../components/LearningNewWords';
import Accordion from '../../components/Accordion';
import TextTrainCreator from '../../components/TextTrainCreator';
import TextTrainCreatorState from '../../context/TextTrainCreator/TextTrainCreatorState';
import FillBlanks from '../../components/FillBlanks';

const LessonWrapper = styled.div`
  padding: 16px;

  h2,
  h3 {
    text-align: center;
  }
`;

function Lesson() {
  const exercises = [
    {
      id: 1,
      words: [
        { id: 1, trainWord: 't_st', word: 'test' },
        { id: 2, trainWord: 'te_t', word: 'test' },
      ],
    },
    {
      id: 2,
      words: [
        { id: 1, trainWord: 'a__a', word: 'ania' },
        { id: 2, trainWord: 'a__em', word: 'artem' },
      ],
    },
  ];
  return (
    <LessonWrapper>
      {/* <h2>Пробный урок</h2>
      <h3>Произношение. Звуки польского языка </h3>
      <section>
        <h2>Алфавит</h2>
        <Alphabet />
      </section> */}

      <section>
        <h2>Учим новые слова</h2>
        <LearningNewWords />
      </section>

      {/* <section>
        <h2>Читаем</h2>
        <Accordion />
      </section> */}

      {/* <section>
        <h2>Создаем упражнение</h2>
        <TextTrainCreatorState>
          <TextTrainCreator />
        </TextTrainCreatorState>
      </section> */}

      {/* <section>
        <h2>Грамматика</h2>
        <FillBlanks exercise={exercises[0]} />
      </section>  */}
    </LessonWrapper>
  );
}

export default Lesson;

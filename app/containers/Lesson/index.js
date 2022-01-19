import React from 'react';
import styled from 'styled-components';
import Alphabet from 'components/Alphabet';
import LearningNewWords from '../../components/LearningNewWords';
import Accordion from '../../components/Accordion';
import TextTrainCreator from '../../components/TextTrainCreator';
import TextTrainCreatorState from '../../context/TextTrainCreator/TextTrainCreatorState';

const LessonWrapper = styled.div`
  font-family: 'Lobster', cursive;
  padding: 16px;

  h2,
  h3 {
    text-align: center;
  }
`;

function Lesson() {
  return (
    <TextTrainCreatorState>
      <LessonWrapper>
        <h2>Пробный урок</h2>
        <h3>Произношение. Звуки польского языка </h3>
        <section>
          <h2>Алфавит</h2>
          <Alphabet />
        </section>

        <section>
          <h2>Учим новые слова</h2>
          <LearningNewWords />
        </section>

        <section>
          <h2>Читаем</h2>
          <Accordion />
        </section>

        <TextTrainCreator />
      </LessonWrapper>
    </TextTrainCreatorState>
  );
}

export default Lesson;

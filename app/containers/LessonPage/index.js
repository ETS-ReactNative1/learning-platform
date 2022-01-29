import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Accordion from '../../components/Accordion';
import Alphabet from '../../components/Alphabet';
import FillBlanks from '../../components/FillBlanks';
import LearningNewWords from '../../components/LearningNewWords';
import { lessonsData } from '../../lessons-data';

const LessonPageWrapper = styled.div`
  h2 {
    text-align: center;
  }
`;

function LessonPage() {
  const { title } = useParams();

  const currentLesson = lessonsData[title];

  const renderExercisesList = () => {
    const { exercises } = currentLesson;
    return exercises.map(v => {
      if (v.type === 'alphabet') {
        return <Alphabet key={v.id} />;
      }

      if (v.type === 'wordsslider') {
        return <LearningNewWords key={v.id} words={v.data.words} />;
      }

      if (v.type === 'reading') {
        return <Accordion key={v.id} />;
      }

      if (v.type === 'gramma') {
        return <FillBlanks key={v.id} />;
      }

      return <div>Кажется, такого еще нет...</div>;
    });
  };

  return (
    <LessonPageWrapper>
      <h2>{currentLesson.title}</h2>
      {renderExercisesList()}
    </LessonPageWrapper>
  );
}

export default LessonPage;

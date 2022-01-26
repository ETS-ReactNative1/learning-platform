import React from 'react';
import styled from 'styled-components';
import CentralWrapper from '../../components/CentralWrapper/CentralWrapper';
import Lesson from '../Lesson';

const ExerciseBookWrapper = styled.div``;

const ExerciseBook = () => (
  <CentralWrapper>
    <ExerciseBookWrapper>
      <Lesson />
    </ExerciseBookWrapper>
  </CentralWrapper>
);

export default ExerciseBook;

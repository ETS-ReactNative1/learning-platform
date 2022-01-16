import React from 'react';
import styled from 'styled-components';

import AudioWrapper from '../AudioWrapper';
// import Img from '../Img';

const SoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  align-items: center;

  i {
    color: #ffffff;
  }
`;

const Fix = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #ffffff;
  height: 150px;
  padding: 8px;
`;

const Title = styled.div`
  margin: 8px;
`;

function SoundImg() {
  return (
    <SoundWrapper>
      {/* <Img /> */}
      <Fix>
        <div>Тут будет ваша картинка</div>
      </Fix>
      <Title>Тут будет текст</Title>
      <AudioWrapper />
    </SoundWrapper>
  );
}
export default SoundImg;

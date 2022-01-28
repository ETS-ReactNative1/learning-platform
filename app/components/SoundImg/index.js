import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AudioWrapper from '../AudioWrapper';
import Img from '../Img';

const SoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #000;
  align-items: center;
  border: 2px solid rgb(179, 157, 212);
  box-shadow: 0 3px 0 rgb(179, 157, 212);
  border-radius: 10%;
  padding: 8px;
  box-sizing: border-box;
  margin: 8px;

  i {
    color: rgb(236, 41, 107);
  }
`;

const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Title = styled.div`
  margin: 8px;
  display: flex;
  font-size: 20px;
`;

function SoundImg({ imgSrc, word }) {
  return (
    <SoundWrapper>
      <ImageWrapper>
        <Img src={imgSrc} alt={word} />
      </ImageWrapper>
      <Title>
        {word}
        <AudioWrapper />
      </Title>
    </SoundWrapper>
  );
}

SoundImg.propTypes = {
  imgSrc: PropTypes.string,
  word: PropTypes.string,
};

export default SoundImg;

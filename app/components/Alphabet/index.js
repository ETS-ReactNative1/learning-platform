import React from 'react';
import styled from 'styled-components';
import Tip from 'components/Tip';
import AudioWrapper from '../AudioWrapper';

const AlpabetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 auto;
`;

const CharWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  padding: 16px;
  min-width: 100px;
  margin: 0 auto;

  p {
    margin: 0;
    color: orange;
    text-align: center;
  }
`;

const chars = [
  'a',
  ' ą',
  ' b',
  ' с',
  ' ć',
  ' d',
  ' е',
  ' ę',
  ' f',
  ' g',
  ' h',
  ' i',
  ' j',
  ' k',
  ' l',
  ' ł',
  ' m',
  ' n',
  ' ń',
  ' o',
  ' ó',
  ' p',
  ' r',
  ' s',
  ' ś',
  ' t',
  ' u',
  ' w',
  ' y',
  ' z',
  ' ź',
  ' ż',
];

function Alphabet() {
  const renderAlphabet = () =>
    chars.map((v, i) => {
      const upperChar = v.toUpperCase();

      return (
        <CharWrapper key={i}>
          <p>{upperChar}</p>
          <AudioWrapper />
        </CharWrapper>
      );
    });

  return (
    <div>
      <Tip />
      <AlpabetWrapper>{renderAlphabet()}</AlpabetWrapper>
    </div>
  );
}

export default Alphabet;

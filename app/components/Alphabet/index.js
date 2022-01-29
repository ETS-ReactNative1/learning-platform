import React from 'react';
import styled from 'styled-components';
import Tip from 'components/Tip';
import AudioWrapper from '../AudioWrapper';
import CentralWrapper from '../CentralWrapper/CentralWrapper';

const AlpabetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 auto;

  @media (max-width: 799px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 16px;
  }
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
    color: rgb(234, 100, 148);
    text-align: center;
    font-family: 'Lobster', cursive;
  }

  @media (max-width: 799px) {
    font-size: 2rem;
    flex-grow: 1;
    padding: 0;
    min-width: 0;
  }
`;

const chars = [
  {
    id: 0,
    char: 'a',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_a.mp3',
  },
  {
    id: 1,
    char: 'ą',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_a(2).mp3',
  },
  {
    id: 2,
    char: 'b',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_b.mp3',
  },
  {
    id: 3,
    char: 'с',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_c.mp3',
  },
  {
    id: 4,
    char: 'ć',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_c(2).mp3',
  },
  {
    id: 5,
    char: 'd',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_d.mp3',
  },
  {
    id: 6,
    char: 'е',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_e.mp3',
  },
  {
    id: 7,
    char: 'ę',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_e(2).mp3',
  },
  {
    id: 8,
    char: 'f',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_f.mp3',
  },
  {
    id: 9,
    char: 'g',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_g.mp3',
  },
  {
    id: 10,
    char: 'h',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_h.mp3',
  },
  {
    id: 11,
    char: 'i',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_i.mp3',
  },
  {
    id: 12,
    char: 'j',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_j.mp3',
  },
  {
    id: 13,
    char: 'k',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_k.mp3',
  },
  {
    id: 14,
    char: 'l',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_l.mp3',
  },
  {
    id: 15,
    char: 'ł',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_l(2).mp3',
  },
  {
    id: 16,
    char: 'm',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_m.mp3',
  },
  {
    id: 17,
    char: 'n',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_n.mp3',
  },
  {
    id: 18,
    char: 'ń',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_n(2).mp3',
  },
  {
    id: 19,
    char: 'o',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_o.mp3',
  },
  {
    id: 20,
    char: 'ó',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_o(2).mp3',
  },
  {
    id: 21,
    char: 'p',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_p.mp3',
  },
  {
    id: 22,
    char: 'r',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_r.mp3',
  },
  {
    id: 23,
    char: 's',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_s.mp3',
  },
  {
    id: 24,
    char: 'ś',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_s(2).mp3',
  },
  {
    id: 25,
    char: 't',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_t.mp3',
  },
  {
    id: 26,
    char: 'u',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_u.mp3',
  },
  {
    id: 27,
    char: 'w',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_v.mp3',
  },
  {
    id: 28,
    char: 'y',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_y.mp3',
  },
  {
    id: 29,
    char: 'z',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_z.mp3',
  },
  {
    id: 30,
    char: 'ź',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_z(2).mp3',
  },
  {
    id: 31,
    char: 'ż',
    sound: 'https://d1i7tcp6as38tg.cloudfront.net/alphabet/sound_z(3).mp3',
  },
];

function Alphabet() {
  const renderAlphabet = () =>
    chars.map(v => {
      const upperChar = v.char.toUpperCase();

      return (
        <CharWrapper key={v.id}>
          <p>{upperChar}</p>
          <AudioWrapper soundsrc={v.sound} />
        </CharWrapper>
      );
    });

  return (
    <CentralWrapper>
      <Tip />
      <AlpabetWrapper>{renderAlphabet()}</AlpabetWrapper>
    </CentralWrapper>
  );
}

export default Alphabet;

import React from 'react';
import styled from 'styled-components';

const TipWrapper = styled.div`
  font-family: 'Lobster', cursive;
  background-color: yellow;
  padding: 4px 8px;
  display: block;
  width: 100%;
  white-space: wrap;

  p {
    margin: 0;
  }

  i {
    margin: 0 8px;
  }
`;

function Tip() {
  return (
    <TipWrapper>
      <p>
        Нажми на
        <i className="far fa-play-circle" />
        под буквой, чтобы прослушать произношение
      </p>
    </TipWrapper>
  );
}

export default Tip;

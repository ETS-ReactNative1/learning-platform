import React from 'react';
import styled from 'styled-components';

const TipWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px;

  p {
    position: relative;
    margin: 0;
    color: #000;
    border: 2px solid rgb(255, 174, 46);
    border-radius: 5px;
    padding: 8px 50px;
    display: inline-block;
    vertical-align: baseline;
    white-space: wrap;
  }

  span {
    border-radius: 5px;
    top: 0;
    left: 0;
    padding: 4px;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: rgb(255, 174, 46);
  }

  .fa-lightbulb {
    color: #000;
  }

  i {
    margin: 0 8px;
  }

  @media (max-width: 799px) {
    text-align: center;
  }
`;

function Tip() {
  return (
    <TipWrapper>
      <p>
        <span>
          Совет
          <i className="far fa-lightbulb" />
        </span>
        Нажми на
        <i className="far fa-play-circle" />
        под буквой, чтобы прослушать произношение
      </p>
    </TipWrapper>
  );
}

export default Tip;

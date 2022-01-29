import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

  .fa-play-circle {
    color: rgb(26, 2, 103);
  }

  i {
    margin: 0 8px;
  }

  @media (max-width: 799px) {
    text-align: center;

    span {
      transform: translate(-15%, -50%);
    }

    .fa-play-circle {
      font-size: 18px;
    }

    p {
      padding: 8px;
      padding-top: 16px;
      width: 100%;
      display: block;
      font-size: 14px;
    }
  }
`;

function Tip({ text }) {
  return (
    <TipWrapper>
      <p>
        <span>
          Совет
          <i className="far fa-lightbulb" />
        </span>

        {text}
      </p>
    </TipWrapper>
  );
}

Tip.propTypes = {
  text: PropTypes.string,
};

export default Tip;

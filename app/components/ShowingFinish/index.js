import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ShowingFinishWr = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  .ShowingFinish__bottom-line {
    position: relative;
    width: 200px;
    height: 10px;
    border-radius: 5px;
    background-color: #cccccc;
  }

  .ShowingFinish__result-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 10px;
    border-radius: 5px;
    background: linear-gradient(
      61deg,
      rgba(17, 242, 4, 1) 20%,
      rgba(7, 234, 194, 1) 20%,
      rgba(4, 232, 242, 1) 40%,
      rgba(4, 242, 64, 1) 40%,
      rgba(4, 239, 113, 1) 60%,
      rgba(4, 235, 187, 1) 60%,
      rgba(4, 234, 206, 1) 80%,
      rgba(4, 242, 64, 1) 80%
    );
  }

  span {
    margin: 0 20px;
  }

  p {
    margin: 0 20px;
    color: #cdcdcd;
    animation-name: blink;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0.2;
    }
  }
`;

function ShowingFinish({ blanksCount, filledBlanksCount }) {
  const isFinished = filledBlanksCount === blanksCount;

  return (
    <ShowingFinishWr>
      <div className="ShowingFinish__bottom-line">
        <div
          className="ShowingFinish__result-line"
          style={{ width: `${(100 * filledBlanksCount) / blanksCount}%` }}
        />
      </div>

      {!isFinished && (
        <p>
          заполнено {filledBlanksCount} \ {blanksCount}
        </p>
      )}
    </ShowingFinishWr>
  );
}

ShowingFinish.propTypes = {
  blanksCount: PropTypes.number,
  filledBlanksCount: PropTypes.number,
};

export default ShowingFinish;

import React from 'react';
import styled from 'styled-components';

const AudioCustom = styled.div`
  display: flex;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #554da7;
    font-size: 24px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

function AudioWrapper(props) {
  return (
    <AudioCustom>
      <audio src={props}>
        <track kind="captions" {...props} />
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <button type="button">
        <i className="far fa-play-circle" />
      </button>
      {/* <button type="button">
        <i className="far fa-stop-circle" />
      </button> */}
    </AudioCustom>
  );
}

export default AudioWrapper;

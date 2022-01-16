import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const playSound = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };
  return (
    <AudioCustom>
      <audio ref={audioRef}>
        <source src={props.soundSrc} type="audio/mp3" />
        <track kind="captions" {...props} />
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <button type="button" onClick={() => playSound()}>
        <i className="far fa-play-circle" />
      </button>
      {/* <button type="button">
        <i className="far fa-stop-circle" />
      </button> */}
    </AudioCustom>
  );
}

AudioWrapper.propTypes = {
  soundSrc: PropTypes.string,
};

export default AudioWrapper;

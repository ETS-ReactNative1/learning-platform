import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextItemWrapper = styled.div`
  margin: 4px;

  p {
    margin: 0;
  }
`;

function TextItem(props) {
  return (
    <TextItemWrapper>
      <p>{props.text}</p>
    </TextItemWrapper>
  );
}

TextItem.propTypes = {
  text: PropTypes.string,
};

export default TextItem;

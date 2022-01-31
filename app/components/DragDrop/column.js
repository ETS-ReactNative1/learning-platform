import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColumnWrapper = styled.div`
`;

const Title = styled.h3``;
const List = styled.div``;

const Column = ({ title, words }) => {
  console.log(4);

  return (
    <ColumnWrapper>
      <Title>{title}</Title>
      <List>{words}</List>
    </ColumnWrapper>
  );
};

Column.propTypes = {
  title: PropTypes.string,
};

export default Column;

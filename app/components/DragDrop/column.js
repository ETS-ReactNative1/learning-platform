import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ title }) => {
  console.log(4);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

Column.propTypes = {
  title: PropTypes.string,
};

export default Column;

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AccordionItem from './AccordionItem';
import Tip from '../Tip';

const AccordionWrapper = styled.div`
  display: dlex;
  flex-direction: column;
  margin: 40px 0;

  @media (max-width: 767px) {
    padding: 0 8px;
  }
`;

function Accordion({ items }) {
  const renderAccordionItems = () =>
    items.map(item => (
      <AccordionItem key={item.id} title={item.title} text={item.text} />
    ));

  return (
    <AccordionWrapper>
      <h2>Чтение</h2>
      <Tip text="Чтобы открыть нажимай на заголовок" />
      {renderAccordionItems()}
    </AccordionWrapper>
  );
}

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;

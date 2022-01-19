import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AccordionItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 4px;
  overflow: hidden;

  .AccordionItem__button {
    border: 1px solid rgba(85, 77, 167, 0.5);
    padding: 8px;
    padding-left: 16px;
    text-align: left;
    display: flex;
    align-items: center;
    font-family: 'Arial';
    margin: 0;
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: rgba(85, 77, 167, 0.1);
    }

    &:active {
      background-color: rgba(85, 77, 167, 0.8);
    }
  }

  .AccordionItem__button--opened {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .AccordionItem__button--closed {
    border-radius: 5px;
    background-color: rgba(85, 77, 167, 0.4);
  }

  p {
    margin: 0;
  }

  h3 {
    margin: 0;
  }

  i {
    flex-shrink: 0;
    margin-right: 10px;
    color: #554da7;
  }

  .AccordionItem__button--opened i {
    transform: rotate(180deg);
  }

  .AccordionItem__text p {
    white-space: break-spaces;
  }

  .AccordionItem__text {
    justify-content: center;
    padding: 24px;
    border: 1px solid rgba(85, 77, 167, 0.5);
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .AccordionItem__text--closed {
    display: none;
  }

  .AccordionItem__text--opened {
    display: flex;
    animation: fade-in 1s;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function AccordionItem(props) {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    if (props.id === 1) {
      setIsClosed(false);
    }
  }, []);

  return (
    <AccordionItemWrapper key={props.id}>
      <button
        type="button"
        onClick={() => {
          setIsClosed(!isClosed);
        }}
        className={
          isClosed
            ? 'AccordionItem__button AccordionItem__button--closed'
            : 'AccordionItem__button AccordionItem__button--opened'
        }
      >
        <i className="far fa-arrow-alt-circle-down" />
        <p>{props.title}</p>
      </button>

      <div
        className={
          isClosed
            ? 'AccordionItem__text AccordionItem__text--closed'
            : 'AccordionItem__text AccordionItem__text--opened'
        }
      >
        <p>{props.text}</p>
      </div>
    </AccordionItemWrapper>
  );
}

AccordionItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default AccordionItem;

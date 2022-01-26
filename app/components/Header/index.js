import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import CentralWrapper from '../CentralWrapper/CentralWrapper';
import MainNavigation from '../MainNavigation';
import messages from './messages';

const HeaderWrapper = styled.header`
  background-color: rgb(26, 2, 103);
  padding: 16px 24px;

  .Header__link--exbook {
    background-color: rgb(236, 41, 107);
    padding: 8px 16px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    text-decoration: none;
    min-width: 100px;

    &:hover {
      background-color: rgba(236, 41, 107, 0.8);
    }

    &:active {
      background-color: rgba(236, 41, 107, 0.9);
    }
  }

  .Header__link--account {
    color: rgb(255, 255, 255);
    font-size: 20px;
    text-decoration: none;

    &:hover {
      color: rgba(236, 41, 107, 0.8);
    }

    &:active {
      color: rgba(236, 41, 107, 0.9);
    }
  }

  .Header__link--account i {
    margin: 0 8px;
  }

  .Header__centralWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Header() {
  const location = useLocation();
  const path = location.pathname;

  const renderHeaderLink = () => {
    if (path === '/exercisebook') {
      return (
        <Link to="/account" className="Header__link Header__link--account">
          <FormattedMessage {...messages.linkToAccount} />
          <i className="far fa-user-circle" />
        </Link>
      );
    }

    return (
      <Link to="/exercisebook" className="Header__link Header__link--exbook">
        <FormattedMessage {...messages.linkToExbook} />
      </Link>
    );
  };

  return (
    <HeaderWrapper>
      <CentralWrapper className="Header__centralWrapper">
        <MainNavigation />
        {renderHeaderLink()}
      </CentralWrapper>
    </HeaderWrapper>
  );
}

// Header.propTypes = {
//   match: PropTypes.object,
// };

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

const MainNavigationWrapper = styled.nav`
  a {
    text-decoration: none;
    margin: 0 16px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      color: rgb(236, 41, 107);
    }
  }
`;

function MainNavigation() {
  return (
    <MainNavigationWrapper>
      <Link to="/">
        <FormattedMessage {...messages.linkToMain} />
      </Link>
      <Link to="/about">
        <FormattedMessage {...messages.linkToAbout} />
      </Link>
      <Link to="/courses">
        <FormattedMessage {...messages.linkToCourses} />
      </Link>
    </MainNavigationWrapper>
  );
}

export default MainNavigation;

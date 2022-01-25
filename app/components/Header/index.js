import React from 'react';
// import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import CentralWrapper from '../CentralWrapper/CentralWrapper';
import MainNavigation from '../MainNavigation';

// import A from './A';
// import messages from './messages';

const HeaderWrapper = styled.header`
  background-color: rgb(26, 2, 103);
  padding: 16px 24px;

  button {
    background-color: rgb(236, 41, 107);
    padding: 8px 16px;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }

  .Header__centralWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <CentralWrapper className="Header__centralWrapper">
        <MainNavigation />
        <button type="button">Тетрадь</button>
      </CentralWrapper>
    </HeaderWrapper>
  );
}

export default Header;

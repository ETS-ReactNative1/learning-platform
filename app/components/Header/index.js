import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import CentralWrapper from '../CentralWrapper/CentralWrapper';

import A from './A';
import messages from './messages';

const HeaderWrapper = styled.header`
  padding: 24px 16px;
  background-color: #554da7;
  color: #ffffff;
`;

function Header() {
  return (
    <HeaderWrapper>
      <CentralWrapper>
        <A href="#">
          <FormattedMessage {...messages.phone} />
        </A>

        <A href="#">
          <FormattedMessage {...messages.mail} />
        </A>
      </CentralWrapper>
    </HeaderWrapper>
  );
}

export default Header;

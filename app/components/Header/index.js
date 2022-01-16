import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';

const HeaderWrapper = styled.header`
  padding: 16px;
  background-color: #554da7;
  color: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: right;
`;

function Header() {
  return (
    <HeaderWrapper>
      {/* <A href="https://www.reactboilerplate.com/">
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A> */}
      {/* <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar> */}
      <A href="#">
        <FormattedMessage {...messages.phone} />
      </A>

      <A href="#">
        <FormattedMessage {...messages.mail} />
      </A>
    </HeaderWrapper>
  );
}

export default Header;

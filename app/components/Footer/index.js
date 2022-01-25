import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const FooterWrapper = styled.footer`
  background-color: rgb(26, 2, 103);
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  h3 {
    flex-shrink: 1;
    color: rgb(255, 255, 255);
    width: 200px;
    word-break: break-word;
    border-bottom: 1px solid rgb(236, 41, 107);
  }

  a {
    color: rgb(255, 255, 255);
    display: block;
    cursor: pointer;
    margin: 8px 0;
    text-decoration: none;
  }
`;

function Footer() {
  return (
    <FooterWrapper id="contacts-footer">
      <h3>
        <FormattedMessage {...messages.contactsTitle} />
      </h3>
      <A href="tel:+79150324323">
        <FormattedMessage {...messages.phone} />
      </A>
      <A href="mailto:ania@gmail.com">
        <FormattedMessage {...messages.mail} />
      </A>

      {/* <section>

      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section> */}
    </FooterWrapper>
  );
}

export default Footer;

/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  phone: {
    id: `${scope}.phone`,
    defaultMessage: '+7 915 032 4323',
  },
  mail: {
    id: `${scope}.mail`,
    defaultMessage: 'ania@gmail.com',
  },
});

/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  linkToExbook: {
    id: `${scope}.linkToExbook`,
    defaultMessage: 'Тетрадь',
  },
  linkToAccount: {
    id: `${scope}.linkToAccount`,
    defaultMessage: 'Аккаунт',
  },
});

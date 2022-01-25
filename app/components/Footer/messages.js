import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  phone: {
    id: `${scope}.phone`,
    defaultMessage: '+7 915 032 4323',
  },
  mail: {
    id: `${scope}.mail`,
    defaultMessage: 'ania@gmail.com',
  },
  contactsTitle: {
    id: `${scope}.contactsTitle`,
    defaultMessage: 'Контакты',
  },
});

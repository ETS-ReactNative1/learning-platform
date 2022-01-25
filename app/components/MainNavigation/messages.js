import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.MainNavigation';

export default defineMessages({
  linkToMain: {
    id: `${scope}.MainNavigation__link-to-main`,
    defaultMessage: 'Главная',
  },
  linkToAbout: {
    id: `${scope}.MainNavigation__link-to-about`,
    defaultMessage: 'О тетради',
  },
  linkToCourses: {
    id: `${scope}.MainNavigation__link-to-courses`,
    defaultMessage: 'Курсы',
  },
});

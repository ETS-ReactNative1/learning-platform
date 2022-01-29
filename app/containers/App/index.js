/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import MainPage from '../MainPage';
import Promo from '../../components/Promo';
import ExerciseBook from '../ExerciseBook';
import Drawer from '../../components/Drawer';
import LessonPage from '../LessonPage';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;

  .content {
    flex: 1 0 auto;
  }

  footer {
    flex: 0 0 auto;
  }
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <AppWrapper>
      <Helmet titleTemplate="Polsky" defaultTitle="Polsky">
        <meta name="description" content="Polsky" />
      </Helmet>
      <div className="content">
        <Header openDrawer={openDrawer} />
        <Promo />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/exercisebook" component={ExerciseBook} />
          <Route path="/exercisebook/lesson/:title" component={LessonPage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
      {isOpen && <Drawer closeDrawer={closeDrawer} />}
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

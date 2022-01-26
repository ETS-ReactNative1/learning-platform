/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
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
  return (
    <AppWrapper>
      <Helmet titleTemplate="Polsky" defaultTitle="Polsky">
        <meta name="description" content="Polsky" />
      </Helmet>
      <div className="content">
        <Header />
        <Promo />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/exercisebook" component={ExerciseBook} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled, { css, ThemeProvider } from 'styled-components';
import treeChanges from 'tree-changes';

import history from 'modules/history';
import theme, { headerHeight } from 'modules/theme';
import { utils } from 'styled-minimal';

import config from 'config';
import { showAlert } from 'actions/index';

import Home from 'routes/Home';
import Private from 'routes/Private';
import NotFound from 'routes/NotFound';

import Header from 'components/Header';
import SystemAlerts from 'containers/SystemAlerts';

import GlobalStyles from 'components/GlobalStyles';
import RoutePublic from 'components/RoutePublic';
import RoutePrivate from 'components/RoutePrivate';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const MainPrivate = ({ isAuthenticated }) =>
  isAuthenticated &&
  css`
    padding: ${utils.px(headerHeight)} 0 0;
  `;

const Main = styled.main`
  min-height: 100vh;

  ${MainPrivate};
`;

const HAHA_SAYINGS = [
  'The booty is strong with this one',
  'Eat my ass',
  'Sit on my face',
  'Toss my salad now',
];

const getRandomHAHA = hahaList => hahaList[Math.floor(Math.random() * hahaList.length)];

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
    const { changedTo } = treeChanges(this.props, nextProps);

    /* istanbul ignore else */
    if (changedTo('user.isAuthenticated', true)) {
      dispatch(showAlert(getRandomHAHA(HAHA_SAYINGS), { variant: 'success', icon: 'bell' }));
    }
  }

  render() {
    const { dispatch, user } = this.props;

    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <AppWrapper logged={user.isAuthenticated}>
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'en' }}
              encodeSpecialCharacters={true}
              defaultTitle={config.title}
              titleTemplate={`%s | ${config.name}`}
              titleAttributes={{ itemprop: 'name', lang: 'en' }}
            />
            {user.isAuthenticated && <Header dispatch={dispatch} user={user} />}
            <Main isAuthenticated={user.isAuthenticated}>
              <Switch>
                <RoutePublic
                  isAuthenticated={user.isAuthenticated}
                  path="/"
                  exact
                  component={Home}
                />
                <RoutePrivate
                  isAuthenticated={user.isAuthenticated}
                  path="/private"
                  component={Private}
                />
                <Route component={NotFound} />
              </Switch>
            </Main>
            <SystemAlerts />
            <GlobalStyles />
          </AppWrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default hot(connect(mapStateToProps)(App));

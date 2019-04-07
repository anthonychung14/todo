import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { login } from 'actions/index';
import { Button, Container, Text, utils } from 'styled-minimal';

import MeowKaiLogo from 'assets/media/brand/MK-Logo-White.png';
import Background from 'components/Background';

import Splash from 'components/Splash';

const { spacer } = utils;

const HomeContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: ${spacer(3)};

  svg {
    width: 40rem;
  }
`;

const Image = ({ src, alt }) => <img src={src} alt={alt} />;

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleClickLogin = () => {
    const { dispatch } = this.props;

    dispatch(login());
  };

  render() {
    const { user } = this.props;

    return (
      <Background key="Home" data-testid="HomeWrapper">
        <HomeContainer>
          <Image src={MeowKaiLogo} alt="meowkai-logo" />
          <Header>
            <Splash />
          </Header>
          <Button
            animate={user.status === 'running'}
            onClick={this.handleClickLogin}
            size="xl"
            textTransform="lowercase"
            style={{
              backgroundColor: 'white',
              color: 'black',
              textAlign: 'center',
              width: '290px',
              height: '48px',
            }}
          >
            <Text ml={2}>do it</Text>
          </Button>
        </HomeContainer>
      </Background>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);

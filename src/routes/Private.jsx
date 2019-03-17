import React from 'react';
// import styled from 'styled-components';

import { Container, Screen } from 'styled-minimal';

const PlayByPlay = () => <h1>Play by play</h1>;

// const Header = styled.div`
//   margin-bottom: ${utils.spacer(3)};
//   text-align: center;
// `;

const Private = () => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>
      <PlayByPlay />
    </Container>
  </Screen>
);

export default Private;

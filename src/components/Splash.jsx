import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from 'assets/media/brand/MK-OpeningImage.svg';

export const Logo = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  svg {
    height: auto;
    width: 40rem;
  }
`;

export default () => (
  <Logo>
    <Icon />
  </Logo>
);

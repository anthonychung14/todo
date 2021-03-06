import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from 'assets/media/brand/MK-LogoIcon.svg';

export const Logo = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  svg {
    height: auto;
    width: 4.8rem;
  }
`;

export default () => (
  <Logo>
    <Icon />
  </Logo>
);

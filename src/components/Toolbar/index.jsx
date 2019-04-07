import React from 'react';

import { Button, Icon } from 'antd';
import styled from 'styled-components';

import { utils } from 'styled-minimal';

const Header = styled.h2`
  margin-bottom: ${utils.spacer(3)};
  text-align: center;
`;

const HeaderBox = styled.div`
  margin-bottom: ${utils.spacer(3)};
  border-bottom 1px black solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Toolbar = ({ handleModalClick }) => (
  <HeaderBox>
    <Header>Quests</Header>
    <Button onClick={handleModalClick}>
      <Icon type="plus" />
    </Button>
  </HeaderBox>
);

export default Toolbar;

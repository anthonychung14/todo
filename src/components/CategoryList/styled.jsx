import styled from 'styled-components';

import { utils } from 'styled-minimal';

export const CollapsibleTrigger = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoryBox = styled.div`
  margin-top: ${utils.spacer(3)};
  margin-bottom: ${utils.spacer(3)};
  border-bottom 1px purple dotted;
`;

// import { Container, Screen, utils } from 'styled-minimal';
import styled from 'styled-components';

export const ListText = styled.div`
  font-size: 18px;
  flex: 1;
  padding-left: 8px;
`;

export const ActionBox = styled.div`
  border-left: 1px black solid;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
  justify-content: flex-start;
`;

export const ListBox = styled.div`
  border: 1px silver dashed;
  background: light-blue;

  padding: 4px;
  display: flex;
  flex-direction: row;

  margin-top: 4px;
  margin-bottom: 4px;
`;

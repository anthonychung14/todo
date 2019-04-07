// @flow
import React from 'react';
import { compose } from 'recompose';
import { Container, Screen } from 'styled-minimal';

import Toolbar from 'components/Toolbar';
import Modal from 'components/Modal';
import CategoryList from 'components/CategoryList';
import { withEntryModal, withSubmitTodo } from '../enhancers';

const Private = ({ handleModalClick, visible, handleSubmitTodo }) => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>
      <Modal
        visible={visible}
        handleModalClick={handleModalClick}
        handleSubmitTodo={handleSubmitTodo}
      />
      <Toolbar handleModalClick={handleModalClick} />
      <CategoryList />
    </Container>
  </Screen>
);

export default compose(
  withEntryModal,
  withSubmitTodo,
)(Private);

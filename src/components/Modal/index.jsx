import React from 'react';
import { Modal as AntModal, Button } from 'antd';

import TodoForm from 'components/Forms/todo';

class Modal extends React.Component {
  state = {
    loading: false,
  };

  handleOk = values => {
    const { handleSubmitTodo, handleModalClick } = this.props;
    handleSubmitTodo(values);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      handleModalClick();
    }, 1200);
  };

  handleCancel = () => {
    const { handleModalClick } = this.props;
    handleModalClick();
  };

  stubSubmit = () => {
    document.getElementById('todo').dispatchEvent(new Event('submit', { cancelable: true }));
  };

  render() {
    const { loading } = this.state;
    const { visible } = this.props;
    return (
      <AntModal
        visible={visible}
        title="Activity Input"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={this.stubSubmit}>
            Submit
          </Button>,
        ]}
      >
        <TodoForm handleOk={this.handleOk} />
      </AntModal>
    );
  }
}

export default Modal;

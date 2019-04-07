// import React from 'react';
// import { Modal as AntModal, Button } from 'antd';
// import { Input } from 'antd';
// import { compose } from 'recompose';

// import { withEntryModal } from 'enhancers';

// class Modal extends React.Component {
//   state = {
//     loading: false,
//     visible: false,
//   };

//   handleOk = values => {
//     this.setState({ loading: true });
//     setTimeout(() => {
//       this.setState({ loading: false });
//       this.props.handleModalClick();
//       console.log('deleting');
//     }, 1200);
//   };

//   handleCancel = () => {
//     this.props.handleModalClick(false);
//   };

//   render() {
//     const { loading } = this.state;
//     const { visible } = this.props;
//     return (
//       <AntModal
//         visible={visible}
//         title="Activity Input"
//         onOk={this.handleOk}
//         onCancel={this.handleCancel}
//       >
//         Are you sure you want it?
//       </AntModal>
//     );
//   }
// }

// export default withEntryModal(Modal);

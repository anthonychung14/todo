import moment from 'moment';
import { compose, withHandlers, withState } from 'recompose';
import { firebaseConnect } from 'react-redux-firebase';

// const withStore = compose(
//   withContext({ store }, () => {}),
//   getContext({ store }),
// );

// export const withTodoStore = compose(
//   withStore,
//   withHandlers({
//     loadData: props => () => props.store.firestore.get('todos'),
//     onDoneClick: props => (key, done = false) =>
//       props.store.firestore.update(`todos/${key}`, { done }),
//     onNewSubmit: props => newTodo =>
//       props.store.firestore.add('todos', { ...newTodo, owner: 'Anonymous' }),
//   }),
//   lifecycle({
//     componentDidMount(props) {
//       props.loadData();
//     },
//   }),
// );

export const withSubmitTodo = compose(
  firebaseConnect(),
  withHandlers({
    handleSubmitTodo: ({ firebase }) => values => {
      const todo = {
        ...values,
        completed: false,
        links: [],
        children: [],
        date_started: moment().format(),
      };
      firebase.push('todos', todo);
    },
  }),
);

export const withDeleteTodo = compose(
  firebaseConnect(),
  withHandlers({
    handleDeleteTodo: ({ firebase }) => key => {
      firebase.remove(`todos/${key}`);
    },
  }),
);

export const withTextStateUpdate = compose(
  withState('textValue', 'updateTextValue', ''),
  withHandlers(),
);

export const withUpdateDropdown = withHandlers({
  handleChange: () => () => {},
});

export const withEntryModal = compose(
  withState('visible', 'setVisible', false),
  withHandlers({
    handleModalClick: ({ visible, setVisible }) => () => {
      setVisible(!visible);
    },
  }),
);

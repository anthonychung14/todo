import React from 'react';
import moment from 'moment';

import { compose, withHandlers, withProps } from 'recompose';
import get from 'lodash.get';
import { Button, Icon } from 'antd';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { withDeleteTodo } from 'enhancers';
import { InfoBox, ListText, ActionBox, ListBox } from './styled';

const SortableItem = SortableElement(({ key, date, text, handleDeleteTodo }) => (
  <ListBox key={key}>
    <InfoBox>
      <ListText>{date}</ListText>
      <ListText>{text}</ListText>
    </InfoBox>
    <ActionBox>
      <Button size="small" onClick={() => handleDeleteTodo(key)}>
        <Icon type="delete" />
      </Button>
      <Button size="small" onClick={() => handleDeleteTodo(key)}>
        <Icon type="edit" />
      </Button>
      <Button size="small" onClick={() => handleDeleteTodo(key)}>
        <Icon type="check" />
      </Button>
    </ActionBox>
  </ListBox>
));

const SortableItemRow = compose(
  withProps(({ items = [], value: keyValue }) => ({
    text: get(items.find(i => i.key === keyValue), ['value', 'text'], 'hello'),
    date: moment(
      get(items.find(i => i.key === keyValue), ['value', 'date_started'], moment().format()),
    )
      .format('MMM-DD')
      .split('-')
      .join(' '),
  })),
)(SortableItem);

const SortableList = SortableContainer(({ items, todos, handleDeleteTodo }) => (
  <div>
    {items.map((i, idx) => (
      <SortableItemRow
        key={`${idx}-${i}`}
        index={idx}
        items={todos}
        value={i}
        handleDeleteTodo={() => handleDeleteTodo(i)}
      />
    ))}
  </div>
));

const SortableItemList = compose(withDeleteTodo)(SortableList);

class ListItems extends React.Component {
  state = {
    order: [],
  };

  componentDidUpdate(prevProps) {
    const { sortOrder } = this.props;
    if (sortOrder.length && sortOrder.length !== prevProps.sortOrder.length) {
      // TODO: Make the sort order part of larger Redux state
      // eslint-disable-next-line
      this.setState({
        order: sortOrder,
      });
    }
  }

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const { orderedItems } = this.state;
    this.setState({
      order: arrayMove(orderedItems, oldIndex, newIndex),
    });
  };

  render() {
    const { handleSortEnd, todos, sortOrder } = this.props;
    const { order } = this.state;
    return (
      <div>
        <SortableItemList
          todos={todos}
          items={order.length ? order : sortOrder}
          onSortEnd={handleSortEnd}
        />
      </div>
    );
  }
}

export default compose(
  withHandlers({
    handleEditClick: () => () => {
      // console.log('editing');
    },
  }),
)(ListItems);

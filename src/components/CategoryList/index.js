import React from 'react';
import QueueAnim from 'rc-queue-anim';

import { firebaseConnect } from 'react-redux-firebase';
import Collapsible from 'react-collapsible';
import { compose, withProps, branch, renderComponent } from 'recompose';

import { connect } from 'react-redux';
import get from 'lodash.get';
import groupBy from 'lodash.groupby';
import ListItems from 'components/ListItems';

import { CollapsibleTrigger, CategoryBox } from './styled';

const CategoryList = ({ groupedTodos = {} }) => (
  <QueueAnim
    component="div"
    animConfig={[{ opacity: [1, 0], translateY: [0, 30] }, { height: 0 }]}
    ease={['easeOutQuart', 'easeInOutQuart']}
    duration={[550, 450]}
    interval={150}
  >
    {Object.keys(groupedTodos).map(category => (
      <CategoryBox key={category}>
        <Collapsible
          transitionTime={150}
          trigger={
            <CollapsibleTrigger>
              <h2>{category}</h2>
              {get(groupedTodos, category).length}
            </CollapsibleTrigger>
          }
        >
          <ListItems
            todos={get(groupedTodos, category)}
            sortOrder={get(groupedTodos, category).map(i => get(i, 'key'))}
            todoCategories={Object.keys(groupedTodos)}
          />
        </Collapsible>
      </CategoryBox>
    ))}
  </QueueAnim>
);

export default compose(
  firebaseConnect(['todos']),
  connect(
    state => ({
      todos: get(state, ['firebase', 'ordered', 'todos'], []),
    }),
    {},
  ),
  withProps(({ todos = [] }) => ({
    groupedTodos: groupBy(todos, i => get(i, ['value', 'category'])),
  })),
  branch(({ todos }) => todos === null, renderComponent(() => <h1>None</h1>)),
  branch(({ todos = [] }) => todos && !todos.length, renderComponent(() => <h1>Loading</h1>)),
)(CategoryList);

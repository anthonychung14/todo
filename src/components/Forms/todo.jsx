import React from 'react';
import { Input } from 'antd';

import { Form, Field } from 'react-final-form';
import Icon from 'components/Icon';

import SelectDropdown from 'components/SelectDropdown';
import { FormBox, FieldBox } from './styled';

const ErrorMessage = ({ meta }) => (
  <div style={{ color: meta.error ? 'red' : 'green' }}>
    {meta.touched && meta.error && <Icon name="exclamation-circle" />}
    {meta.touched && !meta.error && <Icon name="check-circle" />}
  </div>
);

const TodoForm = ({ handleOk }) => (
  <Form
    onSubmit={handleOk}
    validate={values => {
      const errors = {};

      if (!values.category) {
        errors.category = 'Required';
      }
      if (!values.text) {
        errors.text = 'Required';
      }
      return errors;
    }}
    render={({ handleSubmit }) => (
      <form id="todo" onSubmit={handleSubmit}>
        <FormBox>
          <Field
            name="category"
            placeholder="Category"
            render={({ input, meta }) => (
              <FieldBox>
                <h3>Category</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', flex: '2 1' }}>
                  <SelectDropdown defaultValue="food" input={input} />
                  <ErrorMessage meta={meta} />
                </div>
              </FieldBox>
            )}
          />

          <Field
            name="text"
            placeholder="Category"
            render={({ input, meta }) => (
              <FieldBox>
                <h3>Text</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', flex: '2 1' }}>
                  <Input placeholder="Eat the bootay" autosize="true" {...input} />
                  <ErrorMessage meta={meta} />
                </div>
              </FieldBox>
            )}
          />
        </FormBox>
      </form>
    )}
  />
);

export default TodoForm;

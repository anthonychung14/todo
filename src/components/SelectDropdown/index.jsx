import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

// function handleBlur() {
//   console.log('blur');
// }

// function handleFocus() {
//   console.log('focus');
// }

const SelectDropdown = ({ input: inputProps }) => (
  <Select
    showSearch
    style={{ width: 200 }}
    defaultValue="food"
    placeholder="Select a category"
    optionFilterProp="children"
    filterOption={(input, option) =>
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    {...inputProps}
  >
    <Option value="food">Food</Option>
    <Option value="sex">Sex</Option>
    <Option value="creation">Create</Option>
    <Option value="grow">Grow</Option>
    <Option value="watch">Watch</Option>
  </Select>
);

export default SelectDropdown;

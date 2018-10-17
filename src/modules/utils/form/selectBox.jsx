import Select from 'react-select';
import React from 'react';

export const Selectbox = props => (
  <Select
    value={props.input.value}
    onChange={props.input.onChange}
    onBlur={() => props.input.onBlur(props.input.value)}
    options={props.options}
    placeholder="Select"
    simpleValue
  />
);

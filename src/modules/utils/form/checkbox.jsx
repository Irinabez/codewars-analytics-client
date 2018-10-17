import { Input } from 'reactstrap';
import React from 'react';

export const Checkbox = props => (
  <Input checked={props.input.value} onChange={props.input.onChange} type="checkbox"/>
);

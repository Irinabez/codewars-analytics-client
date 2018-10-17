import React from 'react';
import { Button, Col, FormGroup, Row } from 'reactstrap';
import { Field } from 'redux-form';
import { Checkbox, TextField } from '../../../utils/form/form';
import { required } from '../../../utils/form/validators';

export const renderVariants = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <FormGroup>
      <Button onClick={() => fields.push({})}>Add Variant</Button>
      {submitFailed && error && <span>{error}</span>}
    </FormGroup>

    {fields.map((variant, index) => (
      <Row key={index}>
        <Col lg="1">
          <h4>{index + 1}</h4>
        </Col>

        <Col lg="8">
          <Field
            name={`${variant}.variant`}
            type="text"
            placeholder="Answer"
            component={TextField}
            validate={[required]}
          />
        </Col>

        <Col lg="1">
          <Field
            name={`${variant}.correct`}
            type="text"
            component={Checkbox}
            label="Correct"
          />
        </Col>

        <Col lg="2">
          <Button title="Remove" onClick={() => fields.remove(index)}>
            Remove
          </Button>
        </Col>
      </Row>
    ))}
  </div>
);

import React from 'react';
import { Input } from 'reactstrap';
import Select from 'react-select';

export const TextField = ({ input, meta, label, placeholder, descr, disabled, type }) => (
  <div>
    {/* <pre>{JSON.stringify(meta, 0, 2)}</pre> */}

    <div
      className={[
        'form-group',
        meta.invalid && meta.touched ? 'has-warning' : null,
        meta.valid && meta.touched ? 'has-success' : null
      ].join(' ')}
    >
      {label && (
        <label className="col-form-label" htmlFor={input.name}>
          {label}
        </label>
      )}

      <input
        {...input}
        disabled={disabled}
        placeholder={placeholder}
        className={[
          'form-control',
          meta.invalid && meta.touched ? 'is-invalid' : null,
          meta.valid && meta.touched ? 'is-valid' : null
        ].join(' ')}
        type={type}
      />

      {meta.invalid &&
        meta.touched && <div className="invalid-feedback">{meta.error}</div>}

      <small className="form-text text-muted">{descr}</small>
    </div>
  </div>
);

export const Checkbox = props => (
  <Input checked={props.input.value} onChange={props.input.onChange} type="checkbox" />
);

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

export const TextArea = '';

// Use common component to load files
export const FileField = ({ input, type, meta: { touched, error, warning } }) => {
  delete input.value;
  return (
    <div>
      <label htmlFor={input.name}>
        <input {...input} type={type} multiple />
      </label>
    </div>
  );
};

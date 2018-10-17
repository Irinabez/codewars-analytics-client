import React from 'react';

export default function TextField({
  input,
  meta,
  label,
  placeholder,
  description,
  disabled,
  type
}) {
  return (
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

      <small className="form-text text-muted">{description}</small>
    </div>
  );
}

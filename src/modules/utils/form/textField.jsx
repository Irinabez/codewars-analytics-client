import React, { Component } from 'react';

export default class TextField extends Component {
  state = {
    defaultValue: this.props.defaultValue || ''
  };

  render() {
    const { input, meta, label, placeholder, description, disabled, type } = this.props;

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
          onChange={e => this.setState({ defaultValue: e.target.value })}
          value={this.state.defaultValue}
        />

        {meta.invalid &&
          meta.touched && <div className="invalid-feedback">{meta.error}</div>}

        <small className="form-text text-muted">{description}</small>
      </div>
    );
  }
}

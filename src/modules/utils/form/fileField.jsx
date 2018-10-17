// Use common component to load files
import React from 'react';

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

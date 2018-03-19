import React from 'react';

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const renderInput = ({ input, meta: { error, touched }, ...attributes }) => (
  <div>
    {capitalizeFirstLetter(input.name)}
    <input id={input.name} {...input} {...attributes} />
    {touched && error ? <span>{error}</span> : null}
  </div>
);

export default renderInput;

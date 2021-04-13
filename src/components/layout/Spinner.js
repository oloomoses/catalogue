/* eslint-disable no-use-before-define */
import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div>
    <img src={spinner} alt="loading ..." style={spinnerStyle} />
  </div>
);

const spinnerStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block',
};

export default Spinner;

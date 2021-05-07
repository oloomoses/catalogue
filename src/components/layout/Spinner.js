import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div className="container text-center">
    <img src={spinner} alt="loading ..." />
  </div>
);

export default Spinner;

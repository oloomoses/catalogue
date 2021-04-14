import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Button } from 'react-bootstrap';

const Search = ({ searchCompany }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchCompany(text);
    setText('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control type="text" placeholder="Search company" onChange={onChange} />
      </Form.Group>
      <Form.Group>
        <Button variant="secondary" type="submit">Search</Button>
      </Form.Group>

    </Form>
  );
};

Search.propTypes = {
  searchCompany: PropTypes.func.isRequired,
};

export default Search;

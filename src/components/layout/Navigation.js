import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Navbar, Nav, Form, FormControl, Button, Container,
} from 'react-bootstrap';

const Navigation = ({ searchCompany }) => {
  const onChange = (e) => {
    searchCompany(e.target.value);
  };

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Stocks</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav><Link to="/" className="nav-link">Home</Link></Nav>
          <Nav><Link to="/sectors" className="nav-link">Sectors Performance</Link></Nav>
        </Nav>
        <Form inline>
          <FormControl as="select" placeholder="Search" className="mr-sm-2" onChange={onChange}>
            <option value="actives">Most Active</option>
            <option value="losers">Losers</option>
            <option value="gainers">Gainers</option>
          </FormControl>
          <Button variant="outline-light">Select Category</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  searchCompany: PropTypes.func.isRequired,
};

export default Navigation;

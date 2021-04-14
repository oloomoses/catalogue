import React from 'react';
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Sectors Performance</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl as="select" placeholder="Search" className="mr-sm-2" custom onChange={onChange}>
            <option value="actives">actives</option>
            <option value="losers">losers</option>
            <option value="gainers">gainers</option>
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

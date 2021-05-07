import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Navbar, Nav, Form, FormControl, Button, Container,
} from 'react-bootstrap';
import { filterStock } from '../../redux/stock/stockAction';

const Navigation = () => {
  const url = window.location.pathname;
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(filterStock(e.target.value));
  };
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Stocks</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/sectors">Sectors Performance</Nav.Link>
        </Nav>
        {url === '/' && (
        <Form inline>
          <Button>Select Category</Button>
          <FormControl as="select" placeholder="Search" className="mr-sm-2" onChange={onChange}>
            <option value="actives">Most Active</option>
            <option value="losers">Losers</option>
            <option value="gainers">Gainers</option>
          </FormControl>
        </Form>
        )}
      </Container>
    </Navbar>
  );
};

export default Navigation;

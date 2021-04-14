/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {
  Button, Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const StockItems = ({ company }) => {
  const {
    changes,
    changesPercentage,
    companyName,
    price,
    ticker,
  } = company;
  return (
    <Card className="stockCard">
      <Card.Body>
        <Card.Title className="ticker">{ticker}</Card.Title>
        <Card.Subtitle className="companyName">{companyName}</Card.Subtitle>
        <Card.Text>
          {price}
          {' '}
          USD
        </Card.Text>
        <div>
          <span className="profit">Profit</span>
          {' '}
          <span className="changes">{changes}</span>
          {changesPercentage}
        </div>
      </Card.Body>
      <Button>More... </Button>
    </Card>
  );
};

StockItems.propTypes = {
  company: PropTypes.object.isRequired,
};

export default StockItems;

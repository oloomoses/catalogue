/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
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
        <Card.Text className="mt-3">
          <span className="profit">Price</span>
          {price}
          {' '}
          USD
        </Card.Text>
        <div>
          <span className="profit">Profit</span>
          {' '}
          <span className={changes > 0 ? 'text-success' : 'text-danger'}>
            <span className="changes">{changes}</span>
            {changesPercentage}
          </span>
        </div>
      </Card.Body>
      <Link to={`/company/${ticker}`} className="btn btn-primary">More... </Link>
    </Card>
  );
};

StockItems.propTypes = {
  company: PropTypes.object.isRequired,
};

export default StockItems;

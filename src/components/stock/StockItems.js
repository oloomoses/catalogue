/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
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
    <div>
      <Card>
        <div>{companyName}</div>
        <div>{ticker}</div>
        <div>{price}</div>
        <div>{changes}</div>
        <div>{changesPercentage}</div>
        <Button>More... </Button>
      </Card>
    </div>
  );
};

StockItems.propTypes = {
  company: PropTypes.object.isRequired,
};

export default StockItems;

/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Spinner from '../layout/Spinner';
import StockItems from '../stock/StockItems';

const Companies = ({ companies, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <Row>
        {companies.map((company) => (
          <StockItems key={company.ticker} company={company} />
        ))}
      </Row>
    </div>
  );
};
Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Companies;

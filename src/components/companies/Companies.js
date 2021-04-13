/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import StockItems from '../stock/StockItems';

const Companies = ({ companies, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      {companies.map((company) => (
        <StockItems key={company.ticker} company={company} />
      ))}
    </div>
  );
};
Companies.propTypes = {
  companies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Companies;

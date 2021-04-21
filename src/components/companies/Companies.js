import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import Spinner from '../layout/Spinner';
import StockItems from '../stock/StockItems';

const Companies = () => {
  const loading = useSelector((state) => state.loading);
  const companies = useSelector((state) => state.companies);
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

export default Companies;

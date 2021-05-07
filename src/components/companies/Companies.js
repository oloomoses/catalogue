import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import Spinner from '../layout/Spinner';
import StockItems from '../stock/StockItems';
import { fetchdata } from '../../redux/stock/stockAction';

const Companies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  const loading = useSelector((state) => state.loading);
  const companies = useSelector((state) => state.companies);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <Row>
        {companies.map((company) => (
          <StockItems key={company.ticker} company={company} />
        ))}
      </Row>
    </div>
  );
};

export default Companies;

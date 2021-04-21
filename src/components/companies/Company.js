import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import { companyData } from '../../redux/stock/stockAction';

const Company = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const company = useSelector((state) => state.company);
  const { ticker } = useParams();
  useEffect(() => {
    dispatch(companyData(ticker));
  }, []);

  const {
    symbol,
    price,
    changes,
    companyName,
    industry,
    website,
    description,
    image,
  } = company;

  if (loading) return <Spinner />;

  return (
    <div>
      <div>{symbol}</div>
      <div>{price}</div>
      <div>{changes}</div>
      <div>{companyName}</div>
      <div>{website}</div>
      <div>{description}</div>
      <div>{industry}</div>
      <div>{image}</div>
    </div>
  );
};

export default Company;

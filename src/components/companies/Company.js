import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Company = ({
  getCompany, loading, company,
}) => {
  const { ticker } = useParams();
  useEffect(() => {
    getCompany(ticker);
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

Company.propTypes = {
  getCompany: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  company: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Company;

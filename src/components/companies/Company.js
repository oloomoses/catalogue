import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
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
    <div className="container">
      <div className="d-flex align-items-center justify-content-between my-3">
        <h2 className="">
          <span className="mr-1">{companyName}</span>
          (
          {symbol}
          )
        </h2>
        <h3>
          <span className="badge badge-info mr-3">Price:</span>
          {price}
        </h3>
      </div>
      <Card>
        <Card.Body className="border-bottom">
          <div className="d-flex align-items-center">
            <img src={image} alt="company-img" className="rounded-circle mr-4" />
            <div>{description}</div>
          </div>
        </Card.Body>

        <div className="mx-auto my-2">
          <h4>
            <span className="badge badge-info mr-3">Change in Price :</span>
            {changes}
          </h4>

          <h4>
            <span className="badge badge-info mr-3">Website :</span>
            {website}
          </h4>

          <h4>
            <span className="badge badge-info mr-3">Industry :</span>
            {industry}
          </h4>
        </div>

      </Card>
    </div>
  );
};

export default Company;

import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { fetchSectors } from '../../redux/stock/stockAction';

const Sectors = () => {
  const loading = useSelector((state) => state.loading);
  const sectors = useSelector((state) => state.sectors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectors());
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="container">
      <div className="row">
        {sectors.map((sector) => (
          <div key={sector.sector}>
            <Card className="stockCard">
              <Card.Body>
                <Card.Title>{sector.sector}</Card.Title>
                <Card.Text className="mt-3">
                  <span className="profit">Percentage Change</span>
                  {' '}
                  <span className={parseFloat(sector.changesPercentage.match(/(-|\+)|(\.)|\d+/g).join('')) > 0 ? 'text-success' : 'text-danger'}>
                    {sector.changesPercentage}
                  </span>
                </Card.Text>

              </Card.Body>
            </Card>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Sectors;

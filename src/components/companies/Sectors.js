import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Spinner from '../layout/Spinner';

const Sectors = ({ getSectors, loading, sectors }) => {
  useEffect(() => {
    getSectors();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="row">
      {sectors.map((sector) => (
        <div key={sector.sector}>
          <Card className="stockCard">
            <Card.Body>
              <Card.Title>{sector.sector}</Card.Title>
              <Card.Text className="mt-3">
                <span className="profit">Percentage Change</span>
                {' '}
                <span className={sector.changesPercentage > 0 ? 'text-success' : 'text-danger'}>
                  {sector.changesPercentage}
                </span>
              </Card.Text>

            </Card.Body>
          </Card>
        </div>
      ))}

    </div>
  );
};

Sectors.propTypes = {
  getSectors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  sectors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Sectors;

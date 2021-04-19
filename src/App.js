import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import store from './redux/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Companies from './components/companies/Companies';
import Navigation from './components/layout/Navigation';
import Sectors from './components/companies/Sectors';
import Company from './components/companies/Company';

function App() {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    (async () => {
      const url = 'https://financialmodelingprep.com/api/v3/actives?apikey=3830446fe7a4c1873641ce52d4681a53';
      setLoading(true);
      const res = await axios.get(url);
      setCompanies(res.data);
      setLoading(false);
    })();
  }, []);

  const searchCompany = async (stock) => {
    const url = `https://financialmodelingprep.com/api/v3/${stock}?apikey=3830446fe7a4c1873641ce52d4681a53`;
    setLoading(true);
    const res = await axios.get(url);
    setCompanies(res.data);
    setLoading(false);
  };

  const getCompany = async (ticker) => {
    const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=3830446fe7a4c1873641ce52d4681a53`;
    setLoading(true);

    const res = await axios(url);
    setCompany(res.data[0]);
    setLoading(false);
  };

  const getSectors = async () => {
    const url = 'https://financialmodelingprep.com/api/v3/sectors-performance?apikey=3830446fe7a4c1873641ce52d4681a53';
    setLoading(true);
    const res = await axios.get(url);
    setSectors(res.data);
    setLoading(false);
  };

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation searchCompany={searchCompany} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <div className="container">
                    <Companies loading={loading} companies={companies} />
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/sectors"
              render={() => (
                <div className="container">
                  <Sectors getSectors={getSectors} loading={loading} sectors={sectors} />
                </div>
              )}
            />
            <Route
              exact
              path="/company/:ticker"
              render={() => (
                <div className="container">
                  <Company getCompany={getCompany} loading={loading} company={company} />
                </div>
              )}
            />
          </Switch>

        </div>
      </Router>
    </Provider>
  );
}

export default App;

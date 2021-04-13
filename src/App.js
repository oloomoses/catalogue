import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Companies from './components/companies/Companies';

function App() {
  const [companies, setCompanies] = useState([]);
  // const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const url = 'https://financialmodelingprep.com/api/v3/actives?apikey=3830446fe7a4c1873641ce52d4681a53';
      setLoading(true);
      const res = await axios.get(url);
      setCompanies(res.data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="container">
      <Companies loading={loading} companies={companies} />
    </div>
  );
}

export default App;

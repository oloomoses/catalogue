import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Companies from './components/companies/Companies';
import Search from './components/companies/Search';
// import Company from './components/companies/Company';

function App() {
  const [companies, setCompanies] = useState([]);
  // const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const url = 'https://financialmodelingprep.com/api/v3/stock/list?apikey=3830446fe7a4c1873641ce52d4681a53';
      setLoading(true);
      const res = await axios.get(url);
      setCompanies(res.data);
      setLoading(false);
    })();
  }, []);

  const searchCompany = async (ticker) => {
    const url = `https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=${ticker}&apikey=3830446fe7a4c1873641ce52d4681a53`;
    setLoading(true);
    const res = await axios.get(url);
    console.log(res.data);
    setCompanies(res.data);
    setLoading(false);
  };

  // const getCompany = async (ticker) => {
  //   const url = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=3830446fe7a4c1873641ce52d4681a53`;
  //   setLoading(true);

  //   const res = await axios(url);
  //   setCompany(res.data);
  //   setLoading(false);
  // };

  return (
    <div className="container">
      <Search searchCompany={searchCompany} />
      <Companies loading={loading} companies={companies} />
      {/* <Company /> */}
    </div>
  );
}

export default App;

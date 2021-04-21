import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Companies from './components/companies/Companies';
import Navigation from './components/layout/Navigation';
import Sectors from './components/companies/Sectors';
import Company from './components/companies/Company';
import { fetchdata } from './redux/stock/stockAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route exact path="/sectors" component={Sectors} />
          <Route exact path="/company/:ticker" component={Company} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

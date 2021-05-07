import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Companies from './components/companies/Companies';
import Navigation from './components/layout/Navigation';
import Sectors from './components/companies/Sectors';
import Company from './components/companies/Company';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Companies} />
          <Route exact path="/sectors" component={Sectors} />
          <Route exact path="/company/:ticker" component={Company} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

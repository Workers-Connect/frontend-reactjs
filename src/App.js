import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bulma/css/bulma.css';
import './assets/css/App.css';

// Component
import PrivateRoute from './components/PrivateRoute';

// Pages
import { Login } from './pages/Login';
import Home from './pages/Home';



function App({ user }) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

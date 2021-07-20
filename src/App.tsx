import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

import {HomeView, ProductView} from "./Views";
import {Navigation} from "./Components";
import {ROUTES} from "./Utils/RoutesUtil";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Navigation />
        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomeView />
            </Route>
            <Route path={ROUTES.PRODUCT}>
              <ProductView />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

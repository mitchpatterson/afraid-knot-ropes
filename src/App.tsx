import React from 'react';

import './App.scss';

import {AboutPage, FooterPage, LandingPage, ProductsPage, OrderPage} from "./Pages";
import {Navigation} from "./Components";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Navigation />
        <LandingPage />
        <AboutPage />
        <ProductsPage />
        <OrderPage />
        <FooterPage />
      </div>
    </div>
  );
}

export default App;

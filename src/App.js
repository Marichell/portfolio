import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './reset.scss';
import Portfolio from './portfolio';
import  RedexLibrary from './projects/RedexLibrary/RedexLibrary';
// import HolaMundo from './proyects/HolaMundo';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path = "/" element = { <Portfolio/> } />
          <Route path= "/redexLibrary" element = { <RedexLibrary /> } />
          // {/* <Route path= "/holamundo" element = { <HolaMundo /> } /> */}
          // {/* <Route path="/techecommercehome" element={<TechEcommerce />} />
          // <Route path="/techecommerceproducts" element={<TechEcommerce />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

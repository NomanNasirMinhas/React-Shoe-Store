import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/NavBar';

function RouteConfig() {
  return (
    <div>
        <Router>
          {/* <NavBar/> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/product/:id" component={ProductItem}></Route>
          <Route exact path="*" component={()=> <h2>Not Found</h2>}></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default RouteConfig;

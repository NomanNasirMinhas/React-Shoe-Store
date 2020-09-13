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
import NotFound from './Components/NotFound';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import {TransactionContext, TransactionProvider} from './cartContext';

function RouteConfig() {
  return (
    <div>

      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/checkout" component={Cart}></Route>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/product/:id" component={ProductItem}></Route>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>

    </Router>


    </div>
  );
}

export default RouteConfig;

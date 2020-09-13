import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteConfig from './Route'
import Navbar from './Components/NavBar'
import {TransactionProvider} from './cartContext';
import store from 'store'

function App() {
  if (localStorage.getItem("cart"==null))
  {
    var initialCart=[]
    localStorage.setItem("cart", JSON.stringify(initialCart));
  }

  return (
    <div className="App">
      <RouteConfig />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Home from './components/HomeComponent/Home';
import Cart from './components/CartComponent/Cart';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/cart' component={Cart} />
    </Router>
  );
}

export default App;

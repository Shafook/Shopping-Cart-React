import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Cart />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/product/:id'>
            <SingleProduct />
          </Route>
        </Switch>
      </Router>
    </main>
  );
};

export default App;

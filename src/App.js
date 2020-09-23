import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import './App.css';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';


import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>
     <Banner></Banner>
     <Router>
       <Switch>
       
        <Route exact path='/'>
        <Home></Home>
        </Route>
       
        <Route path='/foods/:id'>
           <Cart></Cart>
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;

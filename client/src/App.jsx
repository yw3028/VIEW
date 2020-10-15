import React from 'react';
import Menu from './Components/Menu';
import { Route } from 'react-router-dom';
import Wishlist from './Components/wishlist';
import './App.scss';

const App = () => {
  return (
    <div>
      <Menu />
      <h1>Hello, Jhim Jhim</h1>
      <Route path="/wishlist" component={Wishlist}></Route>
      <Route path="/watched" component={Wishlist}></Route>
      <Route path="/journal" component={Wishlist}></Route>
    </div>
  );
};

export default App;

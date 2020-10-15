import React from 'react';
import Menu from './Components/Menu';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import GlobalStyle from './globalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Menu />
        <Route path="/" component={Home}></Route>
        <Route path="/wishlist" component={'Wishlist'}></Route>
        <Route path="/watched" component={'Wishlist'}></Route>
        <Route path="/journal" component={'Wishlist'}></Route>
      </div>
    </>
  );
};

export default App;

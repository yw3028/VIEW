import React, { useState, useEfect } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home/Home';

import GlobalStyle from './globalStyle';
import App from './AppStyles';
import MoviedApi from './Services/moviedApiClient';

export default () => {
  const [movies, setMovies] = useState({});
  const [explore, setExplore] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [watched, setWatched] = useState([]);

  const udpdateState = (name, list) => {
    setMovies(movies => )
  }

  useEffect(() => {
    MoviedApi.getExploreMovies().then((movies) => setMovies());
  }, []);

  return (
    <App>
      <GlobalStyle />
      <div>
        <Menu />
        <Route path="/" component={Home}></Route>
        <Route path="/wishlist" component={'Wishlist'}></Route>
        <Route path="/watched" component={'Wishlist'}></Route>
        <Route path="/journal" component={'Wishlist'}></Route>
      </div>
    </App>
  );
};

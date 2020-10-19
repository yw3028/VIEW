import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Journal from './Pages/Journal/Journal';
import Wishlist from './Pages/Wishlist/Wishlist';
import WatchedList from './Pages/WatchedList/WatchedList';
import JournalDetail from './Pages/JournalDetail/JournalDetail';

import GlobalStyle from './globalStyle';
import * as S from './AppStyle';
import MoviedApi from './Services/moviedApiClient';
import { getWatchedlist, getWishlist } from './Services/apiClient';

const App = () => {
  const [explore, setExplore] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [watched, setWatched] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    MoviedApi.getExploreMovies().then((movies) => setExplore(movies));
    getWishlist().then((movies) => setWishlist(movies));
    getWatchedlist()
      .then((movies) => setWatched(movies))
      .then(() => setStatus(true));
  }, []);

  return (
    <S.App>
      <GlobalStyle />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Home
              {...routeProps}
              explore={explore}
              wishlist={wishlist}
              watched={watched}
              status={status}
            />
          )}
        ></Route>
        <Route path="/wishlist" component={Wishlist}></Route>
        <Route path="/watched" component={WatchedList}></Route>
        <Route exact path="/journal" component={Journal}></Route>
        <Route
          path="/journal/:id"
          render={(props) => <JournalDetail {...props} />}
        ></Route>
    </S.App>
  );
};

export default App;


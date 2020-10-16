import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home/Home';
import Journal from './Pages/Journal/Journal';
import JournalDetail from './Pages/JournalDetail/JournalDetail';
import MovieDetail from './Pages/MovieDetail/MovieDetail';

import GlobalStyle from './globalStyle';
import App from './AppStyles';
import MoviedApi from './Services/moviedApiClient';
import { getWatchedlist, getWishlist } from './Services/apiClient';

export default () => {
  const [movies, setMovies] = useState({});
  const [lists, setLists] = useState({
    explore: [],
    inWishlist: [],
    hasWatched: [],
    hasJournal: [],
  });

  useEffect(() => {
    MoviedApi.getExploreMovies().then((apiMovies) => {
      const tempObj = {};
      apiMovies.forEach((apiMovie) => {
        tempObj[apiMovie.id] = apiMovie;
      });
      setMovies({ ...movies, ...tempObj });
    });
    getWishlist().then((wishlistMovies) => {
      const tempObj = {};
      const tempArr = [];
      wishlistMovies.forEach((wishlistMovie) => {
        tempObj[wishlistMovie.apiId] = { ...wishlistMovie, inWishlist: true };
        tempArr.push(wishlistMovie.apiId);
      });
      setMovies({ ...movies, ...tempObj });
      setLists({ ...lists, inWishlist: [...lists.inWishlist, ...tempArr] });
    });
    getWatchedlist().then((watchedMovies) => {
      const tempObj = {};
      const tempArr = [];
      watchedMovies.forEach((watchedMovie) => {
        tempObj[watchedMovie.apiId] = { ...watchedMovie, hasWatched: true };
        tempArr.push(watchedMovie.apiId);
      });
      setMovies({ ...movies, ...tempObj });
      setLists({ ...lists, hasWatched: [...lists.hasWatched, ...tempArr] });
    });
  }, []);

  // console.log('WISH - OUTSIDE', lists.inWishlist);
  // console.log(
  //   'sdafasdfasdfasdf',
  //   lists.inWishlist.map((apiId) => movies[apiId])
  // );
  return (
    <App>
      <GlobalStyle />
      <div>
        {console.log(lists)}
        <Menu />
        <Route
          exact
          path="/"
          render={(routeProps) =>
            lists.inWishlist && (
              <Home
                {...routeProps}
                // explore={list}
                wishlist={lists.inWishlist.map((apiId) => movies[apiId])}
                watched={lists.hasWatched.map((apiId) => movies[apiId])}
                // status={status}
              />
            )
          }
        ></Route>
        <Route path="/wishlist" component={MovieDetail}></Route>
        <Route
          path="/wishlist/:id"
          render={(props) => <MovieDetail {...props} />}
        ></Route>
        <Route path="/watched" component={Journal}></Route>
        <Route
          path="/watched/:id"
          render={(props) => <MovieDetail {...props} />}
        ></Route>
        <Route exact path="/journal" component={Journal}></Route>
        <Route
          path="/journal/:id"
          render={(props) => <JournalDetail {...props} />}
        ></Route>
      </div>
    </App>
  );
};

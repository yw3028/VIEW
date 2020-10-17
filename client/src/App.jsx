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
  }, []);

  useEffect(() => {
    getWatchedlist().then((watchedMovies) => {
      const tempObj = {};
      const tempArr = [];
      watchedMovies.forEach((watchedMovie) => {
        tempObj[watchedMovie.apiId] = { ...watchedMovie, hasWatched: true };
        tempArr.push(watchedMovie.apiId);
      });
      // console.log('tempArr', tempArr);
      // setMovies({ ...movies, ...tempObj });
      setMovies(Object.assign(movies, tempObj));
      // const tempObj2 = Object.assign(lists, tempObj);
      // setLists({ ...lists, hasWatched: [...lists.hasWatched, ...tempArr] });
      setLists(Object.assign(lists, { hasWatched: tempArr }));
    });
  }, []);
  useEffect(() => {
    getWishlist().then((wishlistMovies) => {
      const tempObj = {};
      const tempArr = [];
      wishlistMovies.forEach((wishlistMovie) => {
        tempObj[wishlistMovie.apiId] = { ...wishlistMovie, inWishlist: true };
        tempArr.push(wishlistMovie.apiId);
      });
      // setMovies({ ...movies, ...tempObj });
      setMovies(Object.assign(movies, tempObj));
      setLists(Object.assign(lists, { inWishlist: tempArr }));
      // setLists({ ...lists, inWishlist: [...lists.inWishlist, ...tempArr] });
    });
  }, []);

  const wishlist = lists.inWishlist.map((apiId) => movies[apiId]);
  const watchlist = lists.hasWatched.map((apiId) => movies[apiId]);
  console.log('>>>>>> LOGS STARTS <<<<<<<');
  console.log('MOVIES: ', movies);
  console.log('LISTS : ', lists);
  console.log('LIST.hasWatched: ', lists.hasWatched);
  console.log('LIST.inWishlist: ', lists.inWishlist);
  console.log('watchlist: ', watchlist);
  console.log('wishlist: ', wishlist);
  // console.log('WATCHED - OUTSIDE', lists.hasWatched);
  return (
    <App>
      <GlobalStyle />
      <div>
        {/* {console.log('LISTS >>>>>>', lists)} */}
        <Menu />
        <Route
          exact
          path="/"
          render={(routeProps) =>
            lists.inWishlist && (
              <Home
                {...routeProps}
                // explore={list}
                wishlist={wishlist}
                watched={watchlist}
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

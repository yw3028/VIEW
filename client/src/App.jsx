import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home/Home';

import GlobalStyle from './globalStyle';
import App from './AppStyles';
import MoviedApi from './Services/moviedApiClient';
import { getWatchedlist, getWishlist } from './Services/apiClient';

export default () => {
  // States
  // movies {}
  //  use Effect
  //        get wishlist, watched
  //        iterate over the response
  //           for every moviedId we push it to wishlist state array
  //           create an object with the moviedId as key inside the movies state (if it doesnt exit, otherwise assign/spread) and set wishlist: true
  //         same for watched
  //         get journals
  //         iterate over the response
  //            for every journalId we create an object inside the journal obj state with the journalId as key and the rest of journal properties as values
  //            create an object with the moviedId as key inside the movies state (if it doesnt exit, otherwise assign/spread) and set journal: journalId
  //         time for heroku
  //             put movies

  // const [status, setStatus] = useState(false);
  // const [movies, setMovies] = useState({});
  // const [lists, setLists] = useState({
  //   watched: [],
  //   wishlist: [],
  //   journal: {},
  //   discover: [],
  // });

  // const updateMovies = (list) => {
  //   setMovies((movies) =>
  //     list.reduce((acc, mov) => {
  //       console.log(mov.apiId);
  //       console.log(mov);
  //       return {
  //         ...acc,
  //         [mov.apiId]: Object.assign(mov, { watched: true }),
  //       };
  //     }, movies)
  //   );
  // };

  // useEffect(() => {
  //   // MoviedApi.getExploreMovies()
  //   //   .then((movies) => setExplore(movies))
  //   //   .then(() => setStatus(true));
  //   getWatchedlist().then((watchedMov) => {
  //     console.log('watchedmoviesformapi', watchedMov);
  //     updateMovies(watchedMov);
  //     console.log('siglesource', movies);
  //     watchedMov.forEach((movie) => addMyList(movie.apiId));
  //   });
  //   // getWishlist().then((movies) => setWishlist(movies));
  // }, []);

  // const addMyList = (id) => {
  //   setLists((lists) => ({
  //     ...lists,
  //     watched: lists.watched.includes(id)
  //       ? lists.watched.filter((myId) => myId !== id)
  //       : [...lists.watched, id],
  //   }));
  //   console.log(lists);
  //   setMovies((movies) => ({
  //     ...movies,
  //     [id]: Object.assign(movies[id], { watched: !movies[id].watched }),
  //   }));
  // };

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
    <App>
      <GlobalStyle />
      <div>
        <Menu />
        <Switch>
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
          <Route path="/wishlist" component={'Wishlist'}></Route>
          <Route path="/watched" component={'Wishlist'}></Route>
          <Route path="/journal" component={'Wishlist'}></Route>
        </Switch>
      </div>
    </App>
  );
};

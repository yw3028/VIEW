import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import history from './history';

import Menu from './Components/Menu';
import Home from './Pages/Home/Home';
import Journal from './Pages/Journal/Journal';
import JournalDetail from './Pages/JournalDetail/JournalDetail';
import MovieDetail from './Pages/MovieDetail/MovieDetail';

import GlobalStyle from './globalStyle';
import App from './AppStyles';
import MoviedApi from './Services/moviedApiClient';
import { getWatchedlist, getWishlist, getJournals } from './Services/apiClient';

export const MovieContext = React.createContext(null);

export default () => {
  const [movies, setMovies] = useState({});
  const [lists, setLists] = useState({
    explore: [],
    inWishlist: [],
    hasWatched: [],
    hasJournal: [],
  });

  const updateMovieStatusInList = (movieId, list) => {
    setLists((lists) => ({
      ...lists,
      [list]: lists[list].includes(movieId)
        ? lists[list].filter((id) => id !== movieId)
        : [...lists[list], movieId],
    }));
    setMovies((movies) => ({
      ...movies,
      [movieId]: Object.assign(movies[movieId], {
        [list]: !movies[movieId][list],
      }),
    }));
  };

  const updateState = (name, apiMovies) => {
    setMovies((movies) =>
      apiMovies.reduce((acc, movie) => {
        const id = movie.apiId ? movie.apiId : movie.id;
        if (acc[id]) {
          Object.assign(acc[id], { [name]: true });
          return acc;
        }
        return {
          ...acc,
          [id]: Object.assign(movie, { [name]: true }),
        };
      }, movies)
    );
    // apiMovies.reduce(
    //   (acc, movie) => ({
    //     ...acc,
    //     // [movie[name]]: Object.assign(movie, { [name]: true }),
    //     [movie.apiId ? movie.apiId : movie.id]: Object.assign(movie, {
    //       [name]: true,
    //     }),
    //   }),
    //   movies
    //   )
    // );
    setLists((lists) => ({
      ...lists,
      [name]: apiMovies.map((movie) => (movie.apiId ? movie.apiId : movie.id)),
    }));
  };

  useEffect(() => {
    const promiseOne = MoviedApi.getExploreMovies().then((apiMovies) => {
      updateState('explore', apiMovies);
    });
    const promiseTwo = getWatchedlist().then((watchedMovies) => {
      updateState('hasWatched', watchedMovies);
    });
    const promiseThree = getWishlist().then((wishlistMovies) => {
      updateState('inWishlist', wishlistMovies);
    });
    Promise.all([promiseOne, promiseTwo, promiseThree]).then(() => {
      getJournals().then((journals) => {
        setMovies((movies) =>
          journals.reduce(
            (acc, journal) => ({
              ...acc,
              [journal.Movie.apiId]: Object.assign(acc[journal.Movie.apiId], {
                hasJournal: journal.Movie.id,
              }),
            }),
            movies
          )
        );
        setLists((lists) => ({
          ...lists,
          hasJournal: journals.map((journal) => journal.Movie.apiId),
        }));
      });
    });
  }, []);

  const exploreList = lists.explore.map((apiId) => movies[apiId]);
  const wishlist = lists.inWishlist.map((apiId) => movies[apiId]);
  const watchlist = lists.hasWatched.map((apiId) => movies[apiId]);
  // console.log('>>>>>> LOGS STARTS <<<<<<<');
  // console.log('MOVIES: ', movies);
  // console.log('LISTS : ', lists);
  // console.log('LIST.explore: ', lists.explore);
  // console.log('LIST.hasWatched: ', lists.hasWatched);
  // console.log('LIST.inWishlist: ', lists.inWishlist);
  // console.log('LIST.hasJournal: ', lists.hasJournal);
  // console.log('exploreList: ', exploreList);
  // console.log('watchlist: ', watchlist);
  // console.log('wishlist: ', wishlist);
  return (
    <MovieContext.Provider value={{ updateMovieStatusInList, movies, lists }}>
      <App>
        <GlobalStyle />
        <div history={history}>
          <Menu />
          <Route
            exact
            path="/"
            render={(routeProps) =>
              lists.inWishlist && (
                <Home
                  {...routeProps}
                  explore={exploreList}
                  wishlist={wishlist}
                  watched={watchlist}
                />
              )
            }
          ></Route>
          {/* <Route path="/wishlist" component={WishList}></Route>
        <Route path="/watched" component={WatchedList}></Route> */}
          <Route
            path="/movie/:id"
            render={(props) => <MovieDetail {...props} movies={movies} />}
          ></Route>
          <Route exact path="/journal" component={Journal}></Route>
          <Route
            path="/journal/:id"
            render={(props) => <JournalDetail {...props} />}
          ></Route>
        </div>
      </App>
    </MovieContext.Provider>
  );
};

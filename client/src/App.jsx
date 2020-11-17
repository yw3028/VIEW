import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import Fade from 'react-reveal/Fade';
import { LoopingRhombusesSpinner } from 'react-epic-spinners';

import Home from './Pages/Home/Home';
import Journal from './Pages/Journal/Journal';
import Explore from './Pages/Explore/Explore';
import Wishlist from './Pages/Wishlist/Wishlist';
import WatchedList from './Pages/WatchedList/WatchedList';
import JournalDetail from './Pages/JournalDetail/JournalDetail';
import MovieDetail from './Pages/MovieDetail/MovieDetail';
import Loader from './Components/Loader/Loader';

import Theme from './Theme';
import GlobalStyle from './globalStyle';
import * as S from './AppStyle';
import MoviedApi from './Services/moviedApiClient';
import Login from './Pages/Login/Login';
import {
  getWatchedlist,
  getWishlist,
  getJournals,
  sendTokenToServer,
  sendToken
} from './Services/apiClient';

export const MovieContext = React.createContext(null);

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [searchMovies, setSearchMovies] = useState([]);
  const [movies, setMovies] = useState({});
  const [lists, setLists] = useState({
    explore: [],
    inWishlist: [],
    hasWatched: [],
    hasJournal: [],
  });

  const successGoogle = (response) => {
    console.log('Succes logging with Google', response)
    const tokenId = response.tokenId;
    sendTokenToServer({ tokenId })
      .then((response) => {
        Cookies.set('token', response.token, {
          expires: 30,
        });
        const currentUser = Array.isArray(response.user)
          ? response.user[0]
          : response.user;
        setUser(currentUser);
        setIsAuth(true);
      })
      .catch((error) => console.log(error));
  };

  const errorGoogle = (response) => {
    console.log('Something went wrong logging with Google', response);
  };

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
    setLists((lists) => ({
      ...lists,
      [name]: apiMovies.map((movie) => (movie.apiId ? movie.apiId : movie.id)),
    }));
  };

  useEffect(() => {
    const tokenId = Cookies.get('token');
    if (tokenId) sendToken({tokenId}).then(res => {
      setUser(res);
      setIsAuth(true)})
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (isAuth) {
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
                  hasJournal: journal.id,
                }),
              }),
              movies
            )
          );
          setLists((lists) => ({
            ...lists,
            hasJournal: journals.map((journal) => journal.Movie.apiId),
          }));
          setLoaded(true);
        });
      });
    }
  }, [isAuth]);

  const exploreList = lists.explore.map((apiId) => movies[apiId]);
  const wishlist = lists.inWishlist.map((apiId) => movies[apiId]);
  const watchlist = lists.hasWatched.map((apiId) => movies[apiId]);

  return !isAuth ? (
    <>
      <GlobalStyle />
      <Login successGoogle={successGoogle} errorGoogle={errorGoogle} />
    </>
  ) : !loaded ? (
    <Loader />
  ) : (
    <Fade>
      <Theme>
        <MovieContext.Provider
          value={{
            updateMovieStatusInList,
            updateState,
            movies,
            lists,
            user,
            setIsAuth,
          }}
        >
          <S.App>
            <GlobalStyle primaryColor />

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
            <Route path="/wishlist" component={Wishlist}></Route>
            <Route path="/watched" component={WatchedList}></Route>
            <Route
              path="/movie/:id"
              render={(props) => <MovieDetail {...props} movies={movies} />}
            ></Route>
            <Route exact path="/journal" component={Journal}></Route>
            <Route
              path="/explore"
              render={(props) => (
                <Explore
                  {...props}
                  searchMovies={searchMovies}
                  setSearchMovies={setSearchMovies}
                />
              )}
            ></Route>
            <Route
              path="/journal/:id"
              render={(props) => <JournalDetail {...props} />}
            ></Route>
          </S.App>
        </MovieContext.Provider>
      </Theme>
    </Fade>
  );
};

export default App;

import React, { useState, useEffect, useMemo } from 'react';
import MoviedApi from './Services/moviedApiClient';
import { getWatchedlist, getWishlist } from './Services/apiClient';

const UserContext = React.createContext();

export function UserProvider(props) {
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

  const value = React.useMemo(() => {
    return {
      movies,
      lists,
    };
  }, [movies, lists]);

  return <UserContext.Provider value={value} {...props} />;
}

export function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUser should be inside the UserContext Provider');
  }
  return context;
}

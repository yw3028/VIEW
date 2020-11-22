export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};

export const setExplore = (movies) => {
  return {
    type: 'SET_EXPLORE',
    payload: movies,
  };
};

export const updateWishlist = (movieApiId) => {
  return {
    type: 'UPDATE_WISHLIST',
    payload: movieApiId,
  };
};

export const updateWatched = (movieApiId) => {
  return {
    type: 'UPDATE_WATCHED',
    payload: movieApiId,
  };
};

export const setJournal = (movieId) => {
  return {
    type: 'SET_JOURNAL',
    payload: movieId,
  };
};

export const removeJournal = (movieId) => {
  return {
    type: 'REMOVE_JOURNAL',
    payload: movieId,
  };
};

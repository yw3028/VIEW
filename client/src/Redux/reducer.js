import { createStore, applyMiddleware } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
  movies: {},
  explore: [],
  wishlist: [],
  watched: [],
  journal: [],
};

const reducer = createReducer(initialState, {
  SET_MOVIES: (state, action) => {
    state.movies = action.payload;
  },
  SET_EXPLORE: (state, action) => {
    state.explore = action.payload;
  },
  UPDATE_WISHLIST: (state, action) => {
    const movie = state.wishlist.find(action.payload);
    if (movie) {
      const movieIndex = state.wishlist.indexOf(movie);
      state.wishlist.splice(movieIndex, 1);
    } else {
      state.wishlist.push(action.payload);
    }
  },
  UPDATE_WATCHED: (state, action) => {
    const movie = state.watched.find(action.payload);
    if (movie) {
      const movieIndex = state.watched.indexOf(movie);
      state.watched.splice(movieIndex, 1);
    } else {
      state.watched.push(action.payload);
    }
  },
  SET_JOURNAL: (state, action) => {
    state.journal.push(action.payload);
  },
  REMOVE_JOURNAL: (state, action) => {
    const index = state.journal.indexOf(action.payload);
    state.journal.splice(index, 1);
  }
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

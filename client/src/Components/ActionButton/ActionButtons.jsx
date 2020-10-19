import React, { useContext } from 'react';
import { MovieContext } from '../../App';
import { useHistory } from 'react-router-dom';
import * as S from './ActionButtonStyle';
import {
  getWatchedlist,
  addToJournal,
  addToWatchedlist,
  removeFromWatchedlist,
  addToWishlist,
  removeFromWishlist,
} from '../../Services/apiClient';

const ActionButtons = ({ text, wish, watched, journal, movie, color }) => {
  const { updateMovieStatusInList, movies, lists } = useContext(MovieContext);
  const history = useHistory();
  const movieId = Number(movie.apiId ? movie.apiId : movie.id); // ?

  const createOrReadJournal = () => {
    // Check if it has journal
    if (lists.hasJournal.includes(movieId)) {
      // Yes --> GET journal
      // Pass :journalId to router
      history.push(`/journal/${movies[movieId].hasJournal}`);
    } else {
      // NO --> POST journal and return :journalId
      addToJournal({
        title: 'Add your title',
        entry: 'Start typing...',
        MovieId: movie.apiId ? movie.id : null,
        movieObject: movie,
        UserId: 1,
      }).then((res) => {
        // Pass :journalId to router
        history.push(`/journal/${res.id}`);
      });
    }
  };

  const handleClickWishlist = () => {
    const prom = lists.inWishlist.includes(movieId)
      ? removeFromWishlist(movieId)
      : addToWishlist({
          MovieId: movie.apiId ? movie.id : null,
          movieObject: movie,
        });
    prom.then(() => {
      updateMovieStatusInList(movieId, 'inWishlist');
    });
  };

  const handleClickWatchedlist = () => {
    const prom = lists.hasWatched.includes(movieId)
      ? removeFromWatchedlist(movieId)
      : addToWatchedlist({
          MovieId: movie.apiId ? movie.id : null,
          movieObject: movie,
        });
    prom.then(() => {
      updateMovieStatusInList(movieId, 'hasWatched');
    });
  };

  return (
    <S.ButtonsContainer>
      {wish && (
        <S.ActionButton color={color}>
          <span class="material-icons" onClick={handleClickWishlist}>
            {lists.inWishlist.includes(movieId)
              ? 'favorite'
              : 'favorite_border'}
          </span>
          {text && <S.IconText>Wishlist</S.IconText>}
        </S.ActionButton>
      )}
      {watched && (
        <S.ActionButton color={color}>
          <span class="material-icons" onClick={handleClickWatchedlist}>
            {lists.hasWatched.includes(movieId)
              ? 'done_outline'
              : 'visibility_off'}
          </span>
          {text && <S.IconText>Watched</S.IconText>}
        </S.ActionButton>
      )}
      {journal && (
        <S.ActionButton color={color} onClick={createOrReadJournal}>
          <span class="material-icons">
            {lists.hasJournal.includes(movieId) ? 'book' : 'create'}
          </span>
          {text && <S.IconText>Journal</S.IconText>}
        </S.ActionButton>
      )}
    </S.ButtonsContainer>
  );
};

export default ActionButtons;

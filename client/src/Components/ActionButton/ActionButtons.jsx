import React, { useContext } from 'react';
import { MovieContext } from '../../App';
import { useHistory } from 'react-router-dom';
import * as S from './ActionButtonStyle';
import {
  addToJournal,
  addToWatchedlist,
  removeFromWatchedlist,
  addToWishlist,
  removeFromWishlist,
} from '../../Services/apiClient';

const ActionButtons = ({ text, wish, watched, journal, movie, color }) => {
  const { updateMovieStatusInList, movies, lists } = useContext(MovieContext);

  const history = useHistory();
  const movieId = Number(movie.apiId ? movie.apiId : movie.id);

  const createOrReadJournal = () => {
    if (lists.hasJournal.includes(movieId)) {
      history.push(`/journal/${movies[movieId].hasJournal}`);
    } else {
      addToJournal({
        title: 'Add your title',
        entry: 'Start typing...',
        MovieId: movie.apiId ? movie.id : null,
        movieObject: movie,
      }).then((res) => {
        movies[movieId] = Object.assign(movies[movieId], { hasJournal: true });
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
        <S.ActionButton color={color}>
          <span class="material-icons" onClick={createOrReadJournal}>
            {movies[movieId]['hasJournal'] ? 'book' : 'create'}
          </span>
          {text && <S.IconText>Journal</S.IconText>}
        </S.ActionButton>
      )}
    </S.ButtonsContainer>
  );
};

export default ActionButtons;

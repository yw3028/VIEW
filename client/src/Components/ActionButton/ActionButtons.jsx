import React, { useContext } from 'react';
import { MovieContext } from '../../App';
import { useHistory } from 'react-router-dom';
import * as S from './ActionButtonStyle';
import { addToJournal } from '../../Services/apiClient';

const ActionButtons = ({ text, wish, watched, journal, movieId, color }) => {
  const { updateMovieStatusInList, movies, lists } = useContext(MovieContext);
  const history = useHistory();

  const createOrReadJournal = async () => {
    // Check if it has journal
    if (lists.hasJournal.includes(Number(movieId))) {
      // Yes --> GET journal
      // Pass :journalId to router
      console.log('createOrReadJournal -> movies.movieId', movies.movieId);
      history.push(`/journal/${movies[movieId].hasJournal}`);
    } else {
      // NO --> POST journal and return :journalId
      const newJournal = await addToJournal({
        title: 'Add your title',
        entry: 'Start typing...',
        MovieId: Number(1),
      });
      // Pass :journalId to router
      history.push(`/journal/${newJournal.id}`);
    }
  };
  return (
    <S.ButtonsContainer>
      {wish && (
        <S.ActionButton color={color}>
          <span
            className="material-icons"
            onClick={() =>
              updateMovieStatusInList(Number(movieId), 'inWishlist')
            }
          >
            {lists.inWishlist.includes(Number(movieId))
              ? 'favorite'
              : 'favorite_border'}
          </span>
          {text && <S.IconText>Wishlist</S.IconText>}
        </S.ActionButton>
      )}
      {watched && (
        <S.ActionButton color={color}>
          <span
            className="material-icons"
            onClick={() =>
              updateMovieStatusInList(Number(movieId), 'hasWatched')
            }
          >
            {lists.hasWatched.includes(Number(movieId))
              ? 'done_outline'
              : 'visibility_off'}
          </span>
          {text && <S.IconText>Watchedlist</S.IconText>}
        </S.ActionButton>
      )}
      {journal && (
        <S.ActionButton color={color} onClick={createOrReadJournal}>
          <span className="material-icons">
            {lists.hasJournal.includes(Number(movieId)) ? 'book' : 'create'}
          </span>
          {text && <S.IconText>Journal</S.IconText>}
        </S.ActionButton>
      )}
    </S.ButtonsContainer>
  );
};

export default ActionButtons;

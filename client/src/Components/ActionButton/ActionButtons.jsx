import React, { useContext } from 'react';
import { MovieContext } from '../../App';
import * as S from './ActionButtonStyle';

const ActionButtons = ({ text, wish, watched, journal, movieId, color }) => {
  const { updateMovieStatusInList, lists } = useContext(MovieContext);
  console.log('ActionButtons -> lists', lists);
  console.log('ActionButtons -> movieId', movieId);

  return (
    <S.ButtonsContainer>
      {wish && (
        <S.ActionButton color={color}>
          <span
            class="material-icons"
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
            class="material-icons"
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
        <S.ActionButton color={color}>
          <span
            class="material-icons"
            onClick={() =>
              updateMovieStatusInList(Number(movieId), 'hasWatched')
            }
          >
            {lists.hasWatched.includes(Number(movieId)) ? 'create' : 'book'}
          </span>
          {text && <S.IconText>Journal</S.IconText>}
        </S.ActionButton>
      )}
    </S.ButtonsContainer>
  );
};

export default ActionButtons;

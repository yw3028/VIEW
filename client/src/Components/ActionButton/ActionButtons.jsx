import React, { useContext } from 'react';
import { MovieContext } from '../../App';
import * as S from './ActionButtonStyle';

const ActionButtons = ({ text, wish, watched, journal, movieId }) => {
  const { updateMovieStatusInList, lists } = useContext(MovieContext);

  return (
    <S.ButtonsContainer>
      {wish && (
        <S.ActionButton>
          <span
            class="material-icons"
            onClick={() =>
              updateMovieStatusInList(Number(movieId), 'inWishlist')
            }
          >
            favorite
          </span>
          {text && <S.IconText>Wishlist</S.IconText>}
        </S.ActionButton>
      )}
      {/* {watched && (
        <S.ActionButton>
          <span class="material-icons" onClick={updateMovieStatusInList}>
            visibility_off
          </span>
          {text && <S.IconText>Watched</S.IconText>}
        </S.ActionButton>
      )}
      {journal && (
        <S.ActionButton>
          <span class="material-icons" onClick={updateMovieStatusInList}>
            create
          </span>
          {text && <S.IconText>Journal</S.IconText>}
        </S.ActionButton>
      )} */}
    </S.ButtonsContainer>
  );
};

export default ActionButtons;

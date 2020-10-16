import React from 'react';

import * as S from './ActionButtonStyle';

const ActionButtons = ({ text, wish, watched, journal }) => {
  return (
    <S.ButtonsContainer>
      {wish && (
        <S.ActionButton>
          <span class="material-icons">favorite</span>
          {text && <S.IconText>Wishlist</S.IconText>}
        </S.ActionButton>
      )}
      {watched && (
        <S.ActionButton>
          <span class="material-icons">visibility_off</span>
          {text && <S.IconText>Watched</S.IconText>}
        </S.ActionButton>
      )}
      {journal && (
        <S.ActionButton>
          <span class="material-icons">create</span>
          {text && <S.IconText>Journal</S.IconText>}
        </S.ActionButton>
      )}
    </S.ButtonsContainer>
  );
};

export default ActionButtons;

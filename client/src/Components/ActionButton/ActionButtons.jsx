import React from 'react';
import {
  S_ActionButton,
  S_ButtonsContainer,
  S_IconText,
} from './ActionButtonStyles';

const ActionButtons = ({ text, wish, watched, journal }) => {
  return (
    <S_ButtonsContainer>
      {wish && (
        <S_ActionButton>
          <span class="material-icons">favorite</span>
          {text && <S_IconText>Wishlist</S_IconText>}
        </S_ActionButton>
      )}
      {watched && (
        <S_ActionButton>
          <span class="material-icons">visibility_off</span>
          {text && <S_IconText>Watched</S_IconText>}
        </S_ActionButton>
      )}
      {journal && (
        <S_ActionButton>
          <span class="material-icons">create</span>
          {text && <S_IconText>Journal</S_IconText>}
        </S_ActionButton>
      )}
    </S_ButtonsContainer>
  );
};

export default ActionButtons;

import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import * as S from './PopupAlertStyle';

const PopupAlert = ({ displayPopup }) => {
  return (
    <S.ShowPopup displayPopup={displayPopup}>
      <S.Popup>
        <S.PopupTitle>Do you want to delete this journal entry?</S.PopupTitle>
        <S.ButtonsDiv>
          <Button aria-label="go back">
            <p>Delete</p>
          </Button>
          <Button aria-label="go back">
            <p>Keep</p>
          </Button>
        </S.ButtonsDiv>
      </S.Popup>
    </S.ShowPopup>
  );
};

export default PopupAlert;

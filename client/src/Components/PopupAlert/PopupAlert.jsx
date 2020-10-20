import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { deleteJournalEntry } from '../../Services/apiClient';
import { useHistory } from 'react-router-dom';

import * as S from './PopupAlertStyle';

const PopupAlert = ({ displayPopup, setDisplayPopup, journalId }) => {
  const history = useHistory();

  const handleClick = (event) => {
    console.log('handleClick -> event', event);
    console.log('handleClick -> event.target', event.target);
    console.log('handleClick -> event.target.value', event.target.value);
    if (event.target.value === 'keep') {
      setDisplayPopup(!displayPopup);
    } else if (event.target.value === 'delete') {
      console.log('delete clicked');
      deleteJournalEntry(Number(journalId)).then(() => {
        history.push('/journal/');
      });
    }
  };
  return (
    <S.ShowPopup displayPopup={displayPopup}>
      <S.Popup>
        <S.PopupTitle>Do you want to delete this journal entry?</S.PopupTitle>
        <S.ButtonsDiv>
          <S.Button value="delete" onClick={handleClick}>
            Delete
          </S.Button>
          <S.Button value="keep" onClick={handleClick}>
            Keep
          </S.Button>
        </S.ButtonsDiv>
      </S.Popup>
    </S.ShowPopup>
  );
};

export default PopupAlert;

import React from 'react';
import { deleteJournalEntry } from '../../Services/apiClient';
import { useHistory } from 'react-router-dom';

import * as S from './PopupAlertStyle';

const PopupAlert = ({ displayPopup, setDisplayPopup, journalId }) => {
  const history = useHistory();

  const handleClick = (event) => {
    if (event.target.value === 'keep') {
      setDisplayPopup(!displayPopup);
    } else if (event.target.value === 'delete') {
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

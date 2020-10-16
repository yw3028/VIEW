import React, { useState, useEffect } from 'react';
import moment from 'moment';
import * as S from './JournalEntryStyle';

import { getJournalById } from '../../Services/apiClient';

const JournalEntry = (props) => {
  const journalId = props.match.params.id;
  const [journalEntry, setJournalEntry] = useState({});

  useEffect(() => {
    getJournalById(journalId).then((journal) => {
      setJournalEntry(journal);
    });
  }, []);

  return (
    <S.JournalEntryContainer>
      {console.log(journalEntry)}
      {/* <S.Test> */}
      <S.DateWeatherContainer>
        <p>{moment(journalEntry.date).format('MMMM Do YYYY, h:mm')}</p>
        <S.MobileLabel>&nbsp;·&nbsp;</S.MobileLabel>
        <p>{journalEntry.location} · 22ºC</p>
      </S.DateWeatherContainer>
      <S.JournalTitle>{journalEntry.title}</S.JournalTitle>
      <S.JournalContent>{journalEntry.entry}</S.JournalContent>
      {/* </S.Test> */}
    </S.JournalEntryContainer>
  );
};

export default JournalEntry;

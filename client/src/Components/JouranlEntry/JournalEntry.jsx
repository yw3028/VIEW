import React from 'react';
import moment from 'moment';
import * as S from './JournalEntryStyle';

const JournalEntry = ({ journalEntry }) => {
  const {
    title,
    entry,
    date,
    weather,
    weatherTemperature,
    location,
  } = journalEntry;

  return (
    <S.JournalEntryContainer>
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

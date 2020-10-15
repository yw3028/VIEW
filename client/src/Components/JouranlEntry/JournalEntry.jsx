import React from 'react';
import moment from 'moment';
import {
  S_JournalEntryContainer,
  S_DateWeatherContainer,
  S_MobileLabel,
  S_JournalTitle,
  S_JournalContent,
  // S_Test,
} from './JournalEntryStyle';

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
    <S_JournalEntryContainer>
      {/* <S_Test> */}
      <S_DateWeatherContainer>
        <p>{moment(journalEntry.date).format('MMMM Do YYYY, h:mm')}</p>
        <S_MobileLabel>&nbsp;·&nbsp;</S_MobileLabel>
        <p>{journalEntry.location} · 22ºC</p>
      </S_DateWeatherContainer>
      <S_JournalTitle>{journalEntry.title}</S_JournalTitle>
      <S_JournalContent>{journalEntry.entry}</S_JournalContent>
      {/* </S_Test> */}
    </S_JournalEntryContainer>
  );
};

export default JournalEntry;

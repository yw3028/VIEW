import React from 'react';
import moment from 'moment';
import * as S from './JournalEntryStyle';

const JournalEntry = ({ journalEntry }) => {
  // function handleChange (event) {

  // }

  return (
    <S.JournalEntryContainer>
      <S.DateWeatherContainer>
        <p>{moment(journalEntry.date).format('MMMM Do YYYY, h:mm')}</p>
        <S.MobileLabel>&nbsp;·&nbsp;</S.MobileLabel>
        <p>
          {journalEntry.location} · {journalEntry.weatherTemperature}ºC
        </p>
      </S.DateWeatherContainer>
      <S.JournalTitle value={journalEntry.title}>
        {journalEntry.title}
      </S.JournalTitle>
      <S.JournalContent value={journalEntry.entry}>
        {journalEntry.entry}
      </S.JournalContent>
    </S.JournalEntryContainer>
  );
};

export default JournalEntry;

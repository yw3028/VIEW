import React from 'react';
import moment from 'moment';
import * as S from './JournalEntryStyle';
import debounce from 'underscore/modules/debounce';
import { updateJournalEntry } from '../../Services/apiClient';

const JournalEntry = ({ journalEntry, setJournalEntry }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setJournalEntry({ ...journalEntry, [name]: value });
    debounce(updateJournalEntry(journalEntry.id, { [name]: value }), 1500);
  };

  return (
    <S.JournalEntryContainer>
      <S.DateWeatherContainer>
        <p>{moment(journalEntry.date).format('MMMM Do YYYY, h:mm')}</p>
        <S.MobileLabel>&nbsp;·&nbsp;</S.MobileLabel>
        {journalEntry.weatherTemperature && (
          <p>
            {journalEntry.location} · {journalEntry.weatherTemperature}ºC
          </p>
        )}
      </S.DateWeatherContainer>
      <S.JournalTitle
        name="title"
        value={journalEntry.title}
        onChange={handleChange}
      >
        {journalEntry.title}
      </S.JournalTitle>
      <S.JournalContent
        name="entry"
        value={journalEntry.entry}
        onChange={handleChange}
      >
        {journalEntry.entry}
      </S.JournalContent>
    </S.JournalEntryContainer>
  );
};

export default JournalEntry;

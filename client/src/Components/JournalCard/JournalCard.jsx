import React from 'react';
import moment from 'moment';

import { S_JournalCard, S_JournalPreview, S_JournalDate } from './JournalCardStyle';

const JournalCard = ({ journal }) => {
  return (
    <S_JournalCard>
    <S_JournalDate>
      {moment(journal.date).format('ddd D').toUpperCase()}
    </S_JournalDate>
      <S_JournalPreview>
        <h4>{journal.title}</h4>
        <p>{journal.entry.slice(0, 100)}...</p>
      </S_JournalPreview>
      <p>Movie ID: {journal.Movie.id}</p>
    </S_JournalCard>
  );
};

export default JournalCard;

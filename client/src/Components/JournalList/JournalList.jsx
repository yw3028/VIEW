import React from 'react';
import JournalCard from '../JournalCard/JournalCard';
import * as S from './JournalListStyle';

const JournalList = ({ journals }) => {
  return (
    <S.JournalList>
      {journals.map((journal) => (
        <JournalCard key={journal.id} journal={journal} />
      ))}
    </S.JournalList>
  );
};
export default JournalList;

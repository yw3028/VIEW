import React from 'react';
import JournalCard from '../JournalCard/JournalCard';
import { S_JournalList } from './JournalListStyle';

const JournalList = ({ journals }) => {
  return (
    <S_JournalList>
      {journals.map((journal) => (
        <JournalCard key={journal.id} journal={journal} />
      ))}
    </S_JournalList>
  );
};

export default JournalList;

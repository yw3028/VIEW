import React, { useEffect, useState } from 'react';
import moment from 'moment';
import JournalList from '../../Components/JournalList/JournalList';

import { getJournal } from '../../Services/apiClient';

const groupByMonths = (journals, date) => {
  return journals.reduce((result, journal) => {
    const key = moment(journal[date]).format('MMMM YYYY');
    return {
      ...result,
      [key]: [...(result[key] || []), journal],
    };
  }, {});
};

const Journal = () => {
  const [journals, setJournals] = useState([]);
  const [lists, setLists] = useState({});

  useEffect(() => {
    getJournal().then((journals) => {
      setJournals(journals.sort((a, b) => new Date(b.date) - new Date(a.date)));
    });
  }, []);

  useEffect(() => {
    journals.length && setLists(groupByMonths(journals, 'date'));
  }, [journals]);

  return (
    <div>
      {Object.keys(lists).map((month, index) => (
        <div key={index}>
          <h2>{month.toUpperCase()}</h2>
          <JournalList journals={lists[month]} />
        </div>
      ))}
    </div>
  );
};

export default Journal;

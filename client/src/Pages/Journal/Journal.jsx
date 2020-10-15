import React, { useEffect, useState } from 'react';

import { getJournal } from '../../Services/apiClient';

const groupByMonths = (journals, date) => {
  return journals.reduce((result, journal) => {
    const key = journal[date].slice(0, 7);
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
      setJournals(journals);
    });
  }, []);

  useEffect(() => {
    journals.length && setLists(groupByMonths(journals, 'date'));
  }, [journals]);

  return (
    <div>
      {Object.entries(lists).forEach((value, key) => {
        console.log(`${key} ${value}`);
      })}
    </div>
  );
};

export default Journal;

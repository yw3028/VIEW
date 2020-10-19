import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import JournalList from '../../Components/JournalList/JournalList';
import Menu from '../../Components/Menu';
import { MovieContext } from '../../App';

import * as S from './JournalStyle';

import { getJournals } from '../../Services/apiClient';

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
    getJournals().then((journals) => {
      setJournals(journals.sort((a, b) => new Date(b.date) - new Date(a.date)));
    });
  }, []);

  useEffect(() => {
    journals.length && setLists(groupByMonths(journals, 'date'));
  }, [journals]);
  const { user, setIsAuth } = useContext(MovieContext);
  return (
    <>
      <Menu user={user} setIsAuth={() => setIsAuth(false)} />
      <S.JournalPage>
        {Object.keys(lists).map((month, index) => (
          <div key={index}>
            <h2>{month.toUpperCase()}</h2>
            <JournalList journals={lists[month]} />
          </div>
        ))}
      </S.JournalPage>
    </>
  );
};

export default Journal;

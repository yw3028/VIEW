import React from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as S from './JournalCardStyle';

const JournalCard = ({ journal }) => {
  return (
    <Link to={`/journal/${journal.id}`}>
      <S.JournalCard>
        <S.JournalDate>
          <div>
            {moment(journal.date).format('ddd DD').toUpperCase()}
          </div>
        </S.JournalDate>
        <S.JournalPreview>
          <h4>{journal.title}</h4>
          <p>{journal.entry.slice(0, 50)}...</p>
        </S.JournalPreview>
        <S.MovieImg
          src={`https://image.tmdb.org/t/p/w300/${journal.Movie.backdrop}`}
          alt={journal.Movie.title}
        ></S.MovieImg>
      </S.JournalCard>
    </Link>
  );
};
export default JournalCard;

import React from 'react';
import moment from 'moment';

import * as S from './JournalMovieDetailsStyle';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const JournalMovieDetails = ({movie}) => {
  return (
    <S.JournalMovieDetails>
      <S.DesktopPoster
        src={imageUrlPath + movie.poster_path}
        alt="movie-poster"
      />
      <S.Backdrop bgImage={imageUrlPath + movie.backdrop_path}></S.Backdrop>
      <S.TextBox>
        <S.MovieTitle>{movie.title}</S.MovieTitle>
        <S.MovieInfo>
          {moment(movie.year).format('MMMM YYYY')}
        </S.MovieInfo>
      </S.TextBox>
    </S.JournalMovieDetails>
  );
};

export default JournalMovieDetails;

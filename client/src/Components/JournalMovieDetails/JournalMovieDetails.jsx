import React from 'react';
import mockupMovie from '../MovieDetails/MockDataMovieDetails';
import moment from 'moment';

import * as S from './JournalMovieDetailsStyle';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const JournalMovieDetails = () => {
  return (
    <S.JournalMovieDetails>
      <S.DesktopPoster
        src={imageUrlPath + mockupMovie.poster}
        alt="movie-poster"
      />
      <S.Backdrop bgImage={imageUrlPath + mockupMovie.backdrop}></S.Backdrop>
      <S.TextBox>
        <S.MovieTitle>{mockupMovie.title}</S.MovieTitle>
        <S.MovieInfo>
          {moment(mockupMovie.year).format('MMMM YYYY')}
        </S.MovieInfo>
      </S.TextBox>
    </S.JournalMovieDetails>
  );
};

export default JournalMovieDetails;

import React from 'react';
import mockupMovie from '../MovieDetails/MockDataMovieDetails';
import moment from 'moment';
import {
  S_JournalMovieDetails,
  S_Backdrop,
  S_DesktopPoster,
  S_TextBox,
  S_MovieTitle,
  S_MovieInfo,
  S_MoviePlot,
  S_DesktopLabels,
} from './JournalMovieDetailsStyle';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const JournalMovieDetails = () => {
  return (
    <S_JournalMovieDetails>
      <S_DesktopPoster
        src={imageUrlPath + mockupMovie.poster}
        alt="movie-poster"
      />
      <S_Backdrop bgImage={imageUrlPath + mockupMovie.backdrop}></S_Backdrop>
      <S_TextBox>
        <S_MovieTitle>{mockupMovie.title}</S_MovieTitle>
        <S_MovieInfo>
          {moment(mockupMovie.year).format('MMMM YYYY')}
        </S_MovieInfo>
      </S_TextBox>
    </S_JournalMovieDetails>
  );
};

export default JournalMovieDetails;

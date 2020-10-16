import React from 'react';
import mockupMovie from './MockDataMovieDetails';

import * as S from './MovieDetailsStyle';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  return (
    <S.MovieDetails>
      <S.DesktopPoster
        src={imageUrlPath + mockupMovie.poster}
        alt="movie-poster"
      />
      <S.Backdrop bgImage={imageUrlPath + mockupMovie.backdrop}></S.Backdrop>
      <S.TextBox>
        <S.MovieTitle>{mockupMovie.title}</S.MovieTitle>
        <S.MovieInfo>
          <S.DesktopLabels>Released Date: </S.DesktopLabels>
          {mockupMovie.year}
        </S.MovieInfo>
        <S.MovieInfo>
          <S.DesktopLabels>Genre: </S.DesktopLabels>
          {mockupMovie.genre}
        </S.MovieInfo>
        <S.MovieInfo>
          <S.DesktopLabels>Runtime: </S.DesktopLabels>
          {mockupMovie.runTime} min
        </S.MovieInfo>
        <S.MoviePlot>{mockupMovie.plot}</S.MoviePlot>
      </S.TextBox>
    </S.MovieDetails>
  );
};

export default MovieDetails;

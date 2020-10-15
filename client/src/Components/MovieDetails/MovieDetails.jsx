import React from 'react';
import mockupMovie from './MockDataMovieDetails';
import {
  S_MovieDetails,
  S_Backdrop,
  S_DesktopPoster,
  S_TextBox,
  S_MovieTitle,
  S_MovieInfo,
  S_MoviePlot,
  S_DesktopLabels,
} from './MovieDetailsStyle';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  return (
    <S_MovieDetails>
      <S_DesktopPoster
        src={imageUrlPath + mockupMovie.poster}
        alt="movie-poster"
      />
      <S_Backdrop bgImage={imageUrlPath + mockupMovie.backdrop}></S_Backdrop>
      <S_TextBox>
        <S_MovieTitle>{mockupMovie.title}</S_MovieTitle>
        <S_MovieInfo>
          <S_DesktopLabels>Released Date: </S_DesktopLabels>
          {mockupMovie.year}
        </S_MovieInfo>
        <S_MovieInfo>
          <S_DesktopLabels>Genre: </S_DesktopLabels>
          {mockupMovie.genre}
        </S_MovieInfo>
        <S_MovieInfo>
          <S_DesktopLabels>Runtime: </S_DesktopLabels>
          {mockupMovie.runTime} min
        </S_MovieInfo>
        <S_MoviePlot>{mockupMovie.plot}</S_MoviePlot>
      </S_TextBox>
    </S_MovieDetails>
  );
};

export default MovieDetails;

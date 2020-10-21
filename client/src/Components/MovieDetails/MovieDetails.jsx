import React from 'react';
import moment from 'moment';
import * as S from './MovieDetailsStyle';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = ({ movie }) => {
  return (
    <S.MovieDetails>
      <S.DesktopPoster
        src={imageUrlPath + movie.poster_path}
        alt="movie-poster"
      />
      <S.Backdrop bgImage={imageUrlPath + movie.backdrop_path}></S.Backdrop>
      <S.TextBox>
        <S.MovieTitle className={'detail-page-title'}>
          {movie.title}
        </S.MovieTitle>
        <S.MovieInfo>
          <S.DesktopLabels className={'detail-page-label'}>
            Released Date:{' '}
          </S.DesktopLabels>
          {moment(movie.release_date).format('D MMMM YYYY')}
        </S.MovieInfo>
        {/* <S.MovieInfo>
          <S.DesktopLabels>Genre: </S.DesktopLabels>
          {movie.genre}
        </S.MovieInfo> */}
        {/* <S.MovieInfo>
          <S.DesktopLabels>Runtime: </S.DesktopLabels>
          {movie.runTime} min
        </S.MovieInfo> */}
        <S.MoviePlot>{movie.overview}</S.MoviePlot>
      </S.TextBox>
    </S.MovieDetails>
  );
};

export default MovieDetails;

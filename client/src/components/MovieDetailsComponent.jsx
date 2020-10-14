import React from 'react';
import mockupMovie from './movieDetailsMockUp';
import './MovieDetailsComponent.css';
import { S_MovieDetails } from './styles';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  return (
    <S_MovieDetails>
      <img className={'desktop-poster'} src={imageUrlPath + mockupMovie.poster} alt='movie-poster'/>
      <div className={'mobile backdrop'} style={{backgroundImage: `url(${imageUrlPath + mockupMovie.backdrop})`}}></div>
      <div className="movie-text-info">
        <p className={'journal-detail title'}>{mockupMovie.title}</p>
        <p className={'journal-detail info'}><span className={'desktop-labels'}>Released Date: </span>{mockupMovie.year}</p>
        <p className={'journal-detail info'}><span className={'desktop-labels'}>Genre: </span>{mockupMovie.genre}</p>
        <p className={'journal-detail info'}><span className={'desktop-labels'}>Runtime: </span>{mockupMovie.runTime} min</p>
        <p className={'plot'}>{mockupMovie.plot}</p>
      </div>
    </S_MovieDetails>
  );
};

export default MovieDetails;

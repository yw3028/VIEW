import React from 'react';
import mockupMovie from './movieDetailsMockUp';
import './MovieDetailsComponent.css';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const MovieDetails = () => {
  return (
    <div className="MovieDetails">
      <img className={'desktop-poster'} src={imageUrlPath + mockupMovie.poster} alt='movie-poster'/>
      <img className={'mobile backdrop'} src={imageUrlPath + mockupMovie.backdrop} alt='movie-poster'/>
      <div className="movie-text-info">

      <p className={'journal-detail title'}>{mockupMovie.title}</p>
      <p className={'journal-detail info'}><span className={'desktop-labels'}>Released Date: </span>{mockupMovie.year}</p>
      <p className={'journal-detail info'}><span className={'desktop-labels'}>Genre: </span>{mockupMovie.genre}</p>
      <p className={'journal-detail info'}><span className={'desktop-labels'}>Runtime: </span>{mockupMovie.runTime} min</p>
      <p className={'plot'}>{mockupMovie.plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

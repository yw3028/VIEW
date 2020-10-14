import React from 'react';
import mockupMovie from './movieDetailsMockUp';
import './MovieItemComponent.css';
import MovieDetails from './MovieDetailsComponent';
import Button from './ButtonComponent';

const imageUrlPath = 'https://image.tmdb.org/t/p/w300/';

const MovieItem = () => {
  return (
    <div className="MovieItem">
      <Button
        iconPath={'arrow_back'}
        circular={true}
        // link={}
        color={'darktgrey'}
        backgroundColor={'lightgrey'}
      ></Button>
      <MovieDetails></MovieDetails>
    </div>
  );
};

export default MovieItem;

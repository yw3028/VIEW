import React from 'react';

import MovieTile from './MovieTileStyles';

export default ({ movie }) => {
  return (
    <MovieTile>
      <img
        className="movie_img"
        alt="movie cover"
        src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
      />
      <div className="movie_overlay">
        <button className="movie_overlay_btn">✓</button>
        <button className="movie_overlay_btn">+</button>
      </div>
    </MovieTile>
  );
};

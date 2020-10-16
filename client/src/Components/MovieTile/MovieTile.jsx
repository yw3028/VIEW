import React from 'react';
import * as S from './MovieTileStyle';

export default ({ movie }) => {
  return (
    <S.MovieTile>
      <img
        className="movie_img"
        alt="movie cover"
        src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
      />
      <div className="movie_overlay">
        <button className="movie_overlay_btn">✓</button>
        <button className="movie_overlay_btn">+</button>
      </div>
    </S.MovieTile>
  );
};

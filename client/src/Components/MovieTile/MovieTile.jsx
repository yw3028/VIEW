import React from 'react';

import Button from '../ActionButton/ActionButtons';

import * as S from './MovieTileStyle';

export default ({ movie }) => {
  // In our db the poster is called poster but in moviedApi is called poster_path
  const image = movie.poster_path ? movie.poster_path : movie.poster;
  return (
    <S.MovieTile>
      <img
        className="movie_img"
        alt="movie cover"
        src={'https://image.tmdb.org/t/p/w300/' + image}
      />
      <div className="movie_overlay">
        <button className="movie_overlay_btn">
          <Button wish={true} />
        </button>
        <button className="movie_overlay_btn">
          <Button watched={true} color={true} />
        </button>
      </div>
    </S.MovieTile>
  );
};

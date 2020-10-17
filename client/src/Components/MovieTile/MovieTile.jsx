import React from 'react';
import Button from '../ActionButton/ActionButtons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import * as S from './MovieTileStyle';

export default ({ movie }) => {
  // In our db the poster is called poster but in moviedApi is called poster_path
  const image = movie.poster_path ? movie.poster_path : movie.poster;
  return (
    <Link to={`/movie/${movie.apiId ? movie.apiId : movie.id}`}>
      <S.MovieTile>
        <img
          className="movie_img"
          alt="movie cover"
          src={'https://image.tmdb.org/t/p/w300/' + image}
        />
        <div className="movie_overlay">
          <button className="movie_overlay_btn">
            <Button
              wish={true}
              movieId={movie.apiId ? movie.apiId : movie.id}
            />
          </button>
          <button className="movie_overlay_btn">
            <Button
              watched={true}
              color={true}
              movieId={movie.apiId ? movie.apiId : movie.id}
            />
          </button>
        </div>
      </S.MovieTile>
    </Link>
  );
};

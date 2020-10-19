import React, { useContext } from 'react';
import Button from '../ActionButton/ActionButtons';
import { MovieContext } from '../../App';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import * as S from './MovieTileStyle';

export default ({ movie }) => {
  const { updateMovieStatusInList } = useContext(MovieContext);

  return (
    <Link to={`/movie/${movie.apiId ? movie.apiId : movie.id}#movie`}>
      <S.MovieTile>
        <img
          className="movie_img"
          alt="movie cover"
          src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
        />
        <div className="movie_overlay">
          <button className="movie_overlay_btn">
            <Button
              color={'white'}
              wish={true}
              movieId={movie.apiId ? movie.apiId : movie.id}
              onClick={(event) => {
                event.preventDefault();
                // event.stopPropagation();
                updateMovieStatusInList(
                  Number(movie.apiId ? movie.apiId : movie.id),
                  'inWishlist'
                );
              }}
            />
          </button>
          <button className="movie_overlay_btn">
            <Button
              color={'white'}
              watched={true}
              movieId={movie.apiId ? movie.apiId : movie.id}
            />
          </button>
        </div>
      </S.MovieTile>
    </Link>
  );
};

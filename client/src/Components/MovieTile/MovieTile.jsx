import React, { useContext } from 'react';
import Button from '../ActionButton/ActionButtons';
import { MovieContext } from '../../App';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import * as S from './MovieTileStyle';

export default ({ movie }) => {
  const { updateMovieStatusInList } = useContext(MovieContext);
  return (
    <S.MovieTile>
      <Link to={`/movie/${movie.apiId ? movie.apiId : movie.id}`}>
        <div>
          <img
            className="movie_img"
            alt="movie cover"
            src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
          />
        </div>
      </Link>

      <div className="movie_overlay">
        <button className="movie_overlay_btn">
          <Button
            color={'white'}
            wish={true}
            movie={movie}
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
          <Button color={'white'} watched={true} movie={movie} />
        </button>
      </div>
    </S.MovieTile>
  );
};

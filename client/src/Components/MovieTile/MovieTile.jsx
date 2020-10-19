import React, { useContext } from 'react';
import Button from '../ActionButton/ActionButtons';
import { MovieContext } from '../../App';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import * as S from './MovieTileStyle';

export default ({ movie }) => {
  const { updateMovieStatusInList } = useContext(MovieContext);
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
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
      </animated.div>
  );
};

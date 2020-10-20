import React from 'react';
import MovieTile from '../MovieTile/MovieTile';

import * as S from './SliderStyle';

export default ({ list, title }) => {
  return (
    <S.Slider>
      <div className="list_title">{title}</div>
      <div className="list_scroll">
        {list &&
          list.map((movie) => {
            return (
              movie.poster_path && (
                <div className="item">
                  <MovieTile key={movie.id} movie={movie} />
                </div>
              )
            );
          })}
      </div>
    </S.Slider>
  );
};

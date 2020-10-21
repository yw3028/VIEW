import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import Fade from 'react-reveal/Fade';

import * as S from './SliderStyle';

export default ({ list, title }) => {
  return (
    <S.Slider>
      <div className="list_title">{title}</div>
      <Fade>
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
      </Fade>
    </S.Slider>
  );
};

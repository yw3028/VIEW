import React from 'react';
import MovieTile from '../MovieTile/MovieTile';

import * as S from './SliderStyle';

export default ({ list, title }) => {
  // console.log('LIST', list);
  return (
    <S.Slider>
      <div className="list_title">{title}</div>
      <div className="list_scroll">
        {list &&
          list.map((movie) => {
            return (
              <div className="item">
                <MovieTile movie={movie} />
              </div>
            );
          })}
      </div>
    </S.Slider>
  );
};

import React from 'react';
import MovieTile from '../MovieTile/MovieTile';

import * as S from './SliderStyle';

const movie = {
  popularity: 2119.668,
  vote_count: 93,
  video: false,
  poster_path: '/riYInlsq2kf1AWoGm80JQW5dLKp.jpg',
  id: 741067,
  adult: false,
  backdrop_path: '/aO5ILS7qnqtFIprbJ40zla0jhpu.jpg',
  original_language: 'en',
  original_title: 'Welcome to Sudden Death',
  genre_ids: [28, 18, 53],
  title: 'Welcome to Sudden Death',
  vote_average: 6.8,
  overview:
    "Jesse Freeman is a former special forces officer and explosives expert now working a regular job as a security guard in a state-of-the-art basketball arena. Trouble erupts when a tech-savvy cadre of terrorists kidnap the team's owner and Jesse's daughter during opening night. Facing a ticking clock and impossible odds, it's up to Jesse to not only save them but also a full house of fans in this highly charged action thriller.",
  release_date: '2020-09-29',
};

const title = 'Explore';

// props => movies(array), list-title
export default () => (
  <S.Slider>
    <div className="list_title">{title}</div>
    <div className="list_scroll">
      {[movie, movie, movie].map((movie) => {
        return (
          <div className="item">
            <MovieTile movie={movie} />
          </div>
        );
      })}
    </div>
  </S.Slider>
);

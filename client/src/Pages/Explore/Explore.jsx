import React, { useEffect, useState, useContext } from 'react';
import Menu from '../../Components/Menu';
import Slider from '../../Components/Slider/Slider';

import { MovieContext } from '../../App';

import MoviedApi from '../../Services/moviedApiClient';

import * as S from './ExploreStyle';

const Explore = () => {
  const { updateMovieStatusInList, updateState, movies, lists } = useContext(
    MovieContext
  );

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    MoviedApi.getCategories()
      .then((categories) => {
        setCategories(categories);
        return categories;
      })
      .then((categories) => {
        console.log('WatchedList -> categories', categories);
        categories.forEach((category) => {
          MoviedApi.getMoviesFromCategory(category.id).then((fetchedMovies) => {
            updateState(category.name, fetchedMovies);
          });
        });
      });
  }, []);

  return (
    <>
      <Menu />
      <S.ExploreContainer>
        {categories.map((category) => {
          return (
            lists[category.name] && (
              <Slider
                list={lists[category.name].map((key) => movies[key])}
                title={category.name}
              />
            )
          );
        })}
      </S.ExploreContainer>
    </>
  );
};

export default Explore;


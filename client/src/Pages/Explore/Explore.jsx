import React, { useEffect, useState, useContext } from 'react';
import HeadBar from '../../Components/HeadBar/HeadBar';
import Slider from '../../Components/Slider/Slider';
import Loader from '../../Components/Loader/Loader';

import { MovieContext } from '../../App';

import MoviedApi from '../../Services/moviedApiClient';

import * as S from './ExploreStyle';

const Explore = () => {
  const { updateState, movies, lists } = useContext(MovieContext);

  const [categories, setCategories] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    MoviedApi.getCategories()
      .then((categories) => {
        setCategories(categories);
        return categories;
      })
      .then((categories) => {
        categories.forEach((category) => {
          MoviedApi.getMoviesFromCategory(category.id).then((fetchedMovies) => {
            updateState(category.name, fetchedMovies);
          });
        });
        setPageLoaded(true);
      });
  }, []);

  return !pageLoaded ? (
    <Loader />
  ) : (
    <>
      <HeadBar />
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

import React, { useEffect, useState } from 'react';
import MovieTile from '../../Components/MovieTile/MovieTile';
import Menu from '../../Components/Menu';

import * as S from '../Wishlist/WishlistStyle';

import { getWatchedlist } from '../../Services/apiClient';

const WatchedList = () => {
  const [watchedList, setWatchedList] = useState([]);

  useEffect(() => {
    getWatchedlist().then((watchedList) => {
      setWatchedList(watchedList);
    });
  }, []);

  return (
    <>
      <Menu />
      <S.Wishlist>
        {watchedList.map((watchedMovie) => (
          <MovieTile movie={watchedMovie} />
        ))}
      </S.Wishlist>
    </>
  );
};

export default WatchedList;

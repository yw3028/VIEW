import React, { useEffect, useState, useContext } from 'react';
import MovieTile from '../../Components/MovieTile/MovieTile';
import Menu from '../../Components/Menu';

import * as S from '../Wishlist/WishlistStyle';

import { getWatchedlist } from '../../Services/apiClient';
import { MovieContext } from '../../App';

const WatchedList = () => {
  const [watchedList, setWatchedList] = useState([]);

  useEffect(() => {
    getWatchedlist().then((watchedList) => {
      setWatchedList(watchedList);
    });
  }, []);

  const { user, setIsAuth } = useContext(MovieContext);

  return (
    <>
      <Menu user={user} setIsAuth={() => setIsAuth(false)} />
      <S.Wishlist>
        {watchedList.map((watchedMovie) => (
          <MovieTile movie={watchedMovie} />
        ))}
      </S.Wishlist>
    </>
  );
};

export default WatchedList;

import React, { useEffect, useState, useContext } from 'react';
import MovieTile from '../../Components/MovieTile/MovieTile';
import Menu from '../../Components/Menu';

import * as S from './WishlistStyle';

import { getWishlist } from '../../Services/apiClient';
import { MovieContext } from '../../App';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlist().then((wishlist) => {
      setWishlist(wishlist);
    });
  }, []);

  const { user, signOff } = useContext(MovieContext);

  return (
    <>
      <Menu user={user} signOff={signOff} />
      <S.Wishlist>
        {wishlist.map((wish) => (
          <MovieTile movie={wish} />
        ))}
      </S.Wishlist>
    </>
  );
};

export default Wishlist;

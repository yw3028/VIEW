import React, { useEffect, useState } from 'react';
import MovieTile from '../../Components/MovieTile/MovieTile';
import Menu from '../../Components/Menu';

import * as S from './WishlistStyle';

import { getWishlist } from '../../Services/apiClient';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlist().then((wishlist) => {
      setWishlist(wishlist);
    });
  }, []);

  return (
    <>
      <Menu />
      <S.Wishlist>
        {wishlist.map((wish) => (
          <MovieTile movie={wish} />
        ))}
      </S.Wishlist>
    </>
  );
};

export default Wishlist;

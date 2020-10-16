import React, { useEffect, useState } from 'react';
import MovieTile from '../../Components/MovieTile/MovieTile';

// import * as S from './JournalStyle';

import { getWishlist } from '../../Services/apiClient';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  
  useEffect(() => {
    getWishlist().then((wishlist) => {
      setWishlist(wishlist);
    });
  }, []);

  return (
    <div>
      {wishlist.map((wish) => (
        <MovieTile movie={wish} />
      ))}
    </div>
  );
};

export default Wishlist;

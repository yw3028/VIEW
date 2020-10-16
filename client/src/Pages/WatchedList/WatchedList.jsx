import React, { useEffect, useState } from 'react';
import MovieTile from '../../Components/MovieTile/MovieTile';

// import * as S from './JournalStyle';

import { getWatchedlist } from '../../Services/apiClient';

const WatchedList = () => {
  const [watchedList, setWatchedList] = useState([]);
  
  useEffect(() => {
    getWatchedlist().then((watchedList) => {
      setWatchedList(watchedList);
    });
  }, []);

  return (
    <div>
      {watchedList.map((watchedMovie) => (
        <MovieTile movie={watchedMovie} />
      ))}
    </div>
  );
};

export default WatchedList;

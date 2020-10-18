import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Menu from './Components/Menu';
import Home from './Pages/Home/Home';
import Journal from './Pages/Journal/Journal';
import JournalDetail from './Pages/JournalDetail/JournalDetail';

import GlobalStyle from './globalStyle';
import App from './AppStyles';
import MoviedApi from './Services/moviedApiClient';
import { getWatchedlist, getWishlist } from './Services/apiClient';
import Login from './Pages/Login/Login';

export default () => {
  const [explore, setExplore] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [watched, setWatched] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    MoviedApi.getExploreMovies().then((movies) => setExplore(movies));
    getWishlist().then((movies) => setWishlist(movies));
    getWatchedlist()
      .then((movies) => setWatched(movies))
      .then(() => setStatus(true));
  }, []);

  return (
    <Login />
    // <App>
    //   <GlobalStyle />
    //   <div>
    //     <Menu />
    //     <Route
    //       exact
    //       path="/"
    //       render={(routeProps) => (
    //         <Home
    //           {...routeProps}
    //           explore={explore}
    //           wishlist={wishlist}
    //           watched={watched}
    //           status={status}
    //         />
    //       )}
    //     ></Route>
    //     <Route path="/wishlist" component={Journal}></Route>
    //     <Route path="/watched" component={Journal}></Route>
    //     <Route exact path="/journal" component={Journal}></Route>
    //     <Route
    //       path="/journal/:id"
    //       render={(props) => <JournalDetail {...props} />}
    //     ></Route>
    //   </div>
    // </App>
  );
};

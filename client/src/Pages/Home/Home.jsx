import React, { useContext } from 'react';

import Menu from '../../Components/Menu';
import Hero from '../../Components/Hero/Hero';
import Slider from '../../Components/Slider/Slider';

import * as S from './HomeStyle';
import { MovieContext } from '../../App';

export default ({ explore, wishlist, watched, status }) => {
  const { user, setUser, setIsAuth } = useContext(MovieContext);
  return (
    <>
      <Menu user={user} setIsAuth={() => setIsAuth(false)} />
      <S.Home>
        <Hero />
        <Slider list={explore} title={'Explore'} status={status} />
        <Slider list={wishlist} title={'Wishlist'} status={status} />
        <Slider list={watched} title={'Watched'} status={status} />
      </S.Home>
    </>
  );
};

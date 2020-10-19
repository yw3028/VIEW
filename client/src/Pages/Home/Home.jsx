import React from 'react';

import Menu from '../../Components/Menu';
import Hero from '../../Components/Hero/Hero';
import Slider from '../../Components/Slider/Slider';

import * as S from './HomeStyle';

export default ({ explore, wishlist, watched, status }) => {
  return (
    <>
      <Menu />
      <S.Home>
      <Hero />
        <Slider list={explore} title={'Explore'} status={status} />
        <Slider list={wishlist} title={'Wishlist'} status={status} />
        <Slider list={watched} title={'Watched'} status={status} />
      </S.Home>
    </>
  );
};

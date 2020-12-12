import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';

import HeadBar from '../../Components/HeadBar/HeadBar';
import Hero from '../../Components/Hero/Hero';
import Slider from '../../Components/Slider/Slider';

import * as S from './HomeStyle';

export default ({ explore, wishlist, watched }) => {
  // const { user, setUser, setIsAuth } = useContext(MovieContext);
  return (
    <>
      <HeadBar />
      <S.Home>
        <Hero />
        <Fade>
          <Slider list={explore} title={'Explore'} />
          <Slider list={wishlist} title={'Wishlist'} />
          <Slider list={watched} title={'Watched'} />
        </Fade>
      </S.Home>
    </>
  );
};

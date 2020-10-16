import React from 'react';

import Hero from '../../Components/Hero/Hero';
import Slider from '../../Components/Slider/Slider';

export default ({ explore, wishlist, watched, status }) => {
  return (
    <div className="App">
      <Hero />
      {/* <Slider list={explore} title={'Explore'} status={status} /> */}
      <Slider list={wishlist} title={'Wishlist'} status={status} />
      <Slider list={watched} title={'Watched'} status={status} />
    </div>
  );
};

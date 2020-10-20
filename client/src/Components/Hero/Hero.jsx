import React from 'react';
import Gallereact from 'gallereact';

import * as S from './HeroStyle';

const images = [
  'https://www.cincinnatiarts.org/assets/img/Hamilton2021_1300X740-5f51cb5528.jpg',
  'https://thewatchmancomau.files.wordpress.com/2019/08/ouatih-featured.jpg',
  'https://yc.cldmlk.com/nnwb6jeha1q71vtwttnq6ddc2g/1602030325602_wolfofsnowhollowwebsite2.jpg',
  'https://i2.wp.com/writertherapy.com/wp-content/uploads/2020/04/Jojo-Rabbit-Movie-banner-spread-1.png?resize=1024%2C576&ssl=1',
'https://see.news/wp-content/uploads/2020/02/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg',
'https://assets.www.warnerbroscanada.com/drupal-root/public/article/media/ajax/fieldpromoimage/und/0/form-pk7499qv0znzw5oqsil5xcqwmpxejoje2gmfbgtf9m/tenet-chatbot-blogpost-banner.jpg'];

export default () => {
  return (
    <S.Hero>
      <Gallereact
        images={images}
        displayDot={false} 
        autoPlay={true} 
      />
    </S.Hero>
  );
};

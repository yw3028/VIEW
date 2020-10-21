import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import * as S from './MovieRatingStyle';

const MovieRating = ({rating}) => {
  return (
    <S.RatingBox>
        <Rating
          name="customized-empty"
          defaultValue={(rating/2)}
          precision={0.5}
          size="large"
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
   
    </S.RatingBox>
  );
}

export default MovieRating;
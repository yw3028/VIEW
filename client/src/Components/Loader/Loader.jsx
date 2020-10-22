import React from 'react';
import { LoopingRhombusesSpinner } from 'react-epic-spinners';

import * as S from './LoaderStyle';

const Loader = () => (
  <S.Loader>
    <LoopingRhombusesSpinner color="black" />
  </S.Loader>
);

export default Loader;

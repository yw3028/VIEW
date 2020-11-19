import React, { useContext } from 'react';
import Menu from '../Menu';
import SearchBar from '../Search/Search';
import * as S from './HeadBarStyle';
import { MovieContext } from '../../App';

const HeadBar = () => {
  const { user, signOff } = useContext(MovieContext);
  return (
    <S.HeadBar>
      <Menu user={user} signOff={signOff}/>
      <S.Logo>
        VIEW
      </S.Logo>
      <SearchBar/>
    </S.HeadBar>
    
  );
};

export default HeadBar;

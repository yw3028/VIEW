import React from 'react';
import './JournalDetailStyle.js';
import JournalMovieDetails from '../../Components/JournalMovieDetails/JournalMovieDetails';
import JournalEntry from '../../Components/JouranlEntry/JournalEntry';
import mockDataJournal from './MockJournalEntry';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';

import * as S from './JournalStyle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: 20,
      backgroundColor: 'white',
    },
  },
}));

const JournalPage = () => {
  const classes = useStyles();

  return (
    <S.PageContainer>
      <S.TopIcons className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </S.TopIcons>
      <S.MovieAndJournalContainer>
        <S.MovieDetailsContainer>
          <JournalMovieDetails></JournalMovieDetails>
        </S.MovieDetailsContainer>
        <JournalEntry journalEntry={mockDataJournal}></JournalEntry>
      </S.MovieAndJournalContainer>
    </S.PageContainer>
  );
};

export default JournalPage;

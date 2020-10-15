import React from 'react';
import './JournalStyle.js';
import JournalMovieDetails from '../../Components/JournalMovieDetails/JournalMovieDetails';
import JournalEntry from '../../Components/JouranlEntry/JournalEntry';
import mockDataJournal from './MockJournalEntry';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  S_PageContainer,
  S_TopIcons,
  S_MovieAndJournalContainer,
  S_MovieDetailsContainer,
} from './JournalStyle';

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
    <S_PageContainer>
      <S_TopIcons className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </S_TopIcons>
      <S_MovieAndJournalContainer>
        <S_MovieDetailsContainer>
          <JournalMovieDetails></JournalMovieDetails>
        </S_MovieDetailsContainer>
        <JournalEntry journalEntry={mockDataJournal}></JournalEntry>
      </S_MovieAndJournalContainer>
    </S_PageContainer>
  );
};

export default JournalPage;

import React, { useState, useEffect } from 'react';
import './JournalDetailStyle.js';
import JournalMovieDetails from '../../Components/JournalMovieDetails/JournalMovieDetails';
import JournalEntry from '../../Components/JouranlEntry/JournalEntry';
import DeletePopupAlert from '../../Components/PopupAlert/PopupAlert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DeleteIcon from '@material-ui/icons/Delete';

import { getJournalById } from '../../Services/apiClient';

import * as S from './JournalDetailStyle';

const useStyles = makeStyles(() => ({
  root: {
    '& > *': {
      margin: 20,
      backgroundColor: 'white',
    },
  },
}));

const JournalDetail = (props) => {
  const classes = useStyles();
  const journalId = props.match.params.id;
  const [journalEntry, setJournalEntry] = useState({});
  const [displayPopup, setDisplayPopup] = useState(false);

  useEffect(() => {
    getJournalById(journalId).then((journal) => {
      setJournalEntry(journal);
      console.log(journal, 'journal');
    });
  }, [props]);

  return (
    <S.PageContainer>
      <S.TopIcons className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon onClick={props.history.goBack} />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => {
            setDisplayPopup(!displayPopup);
            console.log('clicked');
          }}
        >
          <DeleteIcon />
        </IconButton>
      </S.TopIcons>
      <S.MovieAndJournalContainer>
        <S.MovieDetailsContainer>
          {journalEntry.Movie && (
            <JournalMovieDetails movie={journalEntry.Movie} />
          )}
        </S.MovieDetailsContainer>
        <JournalEntry
          journalEntry={journalEntry}
          setJournalEntry={setJournalEntry}
        ></JournalEntry>
      </S.MovieAndJournalContainer>
      <DeletePopupAlert
        displayPopup={displayPopup ? 'flex' : 'none'}
      ></DeletePopupAlert>
    </S.PageContainer>
  );
};

export default JournalDetail;

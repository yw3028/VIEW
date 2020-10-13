const router = require('express').Router();

const journalController = require('../controllers/journalController');

router
  .route('/')
  .get(journalController.getAllJournals)
  .post(journalController.postJournal);

router
  .route('/:journalId')
  .get(journalController.getJournal)
  .put(journalController.updateJournal)
  .delete(journalController.deleteJournal);

module.exports = router;


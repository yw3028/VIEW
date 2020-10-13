const router = require('express').Router();

const journalController = require('../controllers/journalController');
const wishlistController = require('../controllers/wishlistController');
const watchedlistController = require('../controllers/watchedlistController');

// router.get('/wishlist', wishlistController.getAll);
// router.get('/wishlist/:movieId', wishlistController.getOne);
// router.post('/wishlist/:movieId', wishlistController.postOne);
// router.delete('/wishlist/:movieId', wishlistController.deleteOne);

// router.get('/watched', watchedlistController.getAll);
// router.get('/watched/:movieId', watchedlistController.getOne);
// router.post('/watched/:movieId', watchedlistController.postOne);
// router.delete('/watched/:movieId', watchedlistController.deleteOne);

router.get('/journals', journalController.getAllJournals);
router.post('/journals', journalController.postJournal);

router.get('/journals/:journalId', journalController.getJournal);
router.put('/journals/:journalId', journalController.updateJournal);
router.delete('/journals/:journalId', journalController.deleteJournal);

module.exports = router;

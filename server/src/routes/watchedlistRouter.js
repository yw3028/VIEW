const router = require('express').Router();
const createMovie = require('./helperFn');

const watchedlistController = require('../controllers/watchedlistController');

router
  .route('/')
  .get(watchedlistController.getAll)
  .post(createMovie, watchedlistController.postOne);

router.delete('/:movieId', watchedlistController.removeOne);

module.exports = router;

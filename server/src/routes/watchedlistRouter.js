const router = require('express').Router();

const watchedlistController = require('../controllers/watchedlistController');

router
  .route('/')
  .get(watchedlistController.getAll)
  .post(watchedlistController.postOne);

router.delete('/:movieId', watchedlistController.removeOne);

module.exports = router;

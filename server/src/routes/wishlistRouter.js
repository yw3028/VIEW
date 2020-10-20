const router = require('express').Router();
const createMovie = require('../utils/helperFn');

const wishlistController = require('../controllers/wishlistController');

router
  .route('/')
  .get(wishlistController.getAll)
  .post(createMovie, wishlistController.postOne);

router.delete('/:movieId', wishlistController.removeOne);

module.exports = router;

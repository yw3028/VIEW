const router = require('express').Router();

const wishlistController = require('../controllers/wishlistController');

router
  .route('/')
  .get(wishlistController.getAll)
  .post(wishlistController.postOne);

router.delete('/:movieId', wishlistController.removeOne);

module.exports = router;
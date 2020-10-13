const router = require('express').Router();

const wishlistController = require('../controllers/wishlistController');
const watchedlistController = require('../controllers/watchedlistController');


router.get('/wishlist', wishlistController.getAll);

router
  .route('/wishlist/:movieId')
  .get(wishlistController.getOne)
  .post(wishlistController.postOne)
  .delete(wishlistController.deleteOne);

router.get('/watched', watchedlistController.getAll);

router
  .route('/watched/:movieId')
  .get(watchedlistController.getOne)
  .post(watchedlistController.postOne)
  .delete(watchedlistController.deleteOne);


module.exports = router;

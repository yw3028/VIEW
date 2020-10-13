const router = require('express').Router();

const userController = require('../controllers/userController');
const wishlistController = require('../controllers/wishlistController');
const watchedlistController = require('../controllers/watchedlistController');

router
  .route('/wishlist')
  .get(wishlistController.getAll)
  .post(wishlistController.postOne);

router
  .route('/wishlist/:movieId')
  .get(wishlistController.getOne)
  .delete(wishlistController.removeOne);

router
  .route('/watched/:movieId')
  .get(watchedlistController.getAll)
  .post(watchedlistController.postOne);

router
  .route('/watched/:movieId')
  .get(watchedlistController.getOne)
  .delete(watchedlistController.removeOne);

router.post('/user', userController.postOne);

router
  .route('/user/:userId')
  .get(userController.getOne)
  .delete(userController.removeOne);


module.exports = router;

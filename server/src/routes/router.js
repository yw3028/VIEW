const router = require('express').Router();

const userController = require('../controllers/userController');
const wishlistController = require('../controllers/wishlistController');
const watchedlistController = require('../controllers/watchedlistController');

router
  .route('/wishlist')
  .get(wishlistController.getAll)
  .post(wishlistController.postOne);

  router.delete('/wishlist/:movieId', wishlistController.removeOne);


router
  .route('/watched/')
  .get(watchedlistController.getAll)
  .post(watchedlistController.postOne);

router.delete('/watched/:movieId', watchedlistController.removeOne);

router.post('/user', userController.postOne);

router
  .route('/user/:userId')
  .get(userController.getOne)
  .delete(userController.removeOne);


module.exports = router;

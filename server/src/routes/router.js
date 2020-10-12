const router = require('express').Router();

const wishlistController = require('../controllers/wishlistController');
const watchedlistController = require('../controllers/watchedlistController');


router.get('/wishlist', wishlistController.getAll);
router.get('/wishlist/:movieId', wishlistController.getOne);
router.post('/wishlist/:movieId', wishlistController.postOne);
router.delete('/wishlist/:movieId', wishlistController.deleteOne);

router.get('/watched', watchedlistController.getAll);
router.get('/watched/:movieId', watchedlistController.getOne);
router.post('/watched/:movieId', watchedlistController.postOne);
router.delete('/watched/:movieId', watchedlistController.deleteOne);


module.exports = router;

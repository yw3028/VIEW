const router = require('express').Router();

const userController = require('../controllers/userController');

router.post('/', userController.postOne);

router
  .route('/:userId')
  .get(userController.getOne)
  .delete(userController.removeOne);

module.exports = router;

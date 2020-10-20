const router = require('express').Router();

const authController = require('../controllers/authController');

router.post('/', authController.googleLogin);
// .get('/whoami', authController.protect);

module.exports = router;

const router = require('express').Router();

const { login } = require('./../controllers/AuthController');

router
  .route('/')
  .post(login);

module.exports = router;
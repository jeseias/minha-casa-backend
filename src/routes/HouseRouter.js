const router = require('express').Router();

const multer = require('multer');
const uploadConfig = require('./../config/multer');

const upload = multer(uploadConfig);

const { createHouse, getHouse, getOneHouse, eliminateHouse } = require('./../controllers/HouseController');

router
  .route('/')
  .post( upload.array('images', 10), createHouse)
  .get(getHouse);

router
  .route('/:id')
  .delete(eliminateHouse)
  .get(getOneHouse)

module.exports = router;
const router = require('express').Router();

const multer = require('multer');
const uploadConfig = require('./../config/multer');

const upload = multer(uploadConfig);

const { createHouse, getHouse, getOneHouse } = require('./../controllers/HouseController');

router
  .route('/')
  .post( upload.array('images', 10), createHouse)
  .get(getHouse);

router
  .route('/:id')
  .get(getOneHouse)

module.exports = router;
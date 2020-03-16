const router = require('express').Router();

const { newMessage, getAllMessage, alreadyRead, getOneMessage, eliminateMessage } = require('./../controllers/ContactController');

router
  .route('/')
  .post(newMessage)
  .get(getAllMessage);

router
  .route('/:id')
  .delete(eliminateMessage)
  .patch(alreadyRead)
  .get(getOneMessage)

module.exports = router;
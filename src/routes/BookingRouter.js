const router = require('express').Router();

const { newBook, getAllBooking, eliminateBooking } = require('./../controllers/BookingController');

router  
  .route('/')
  .get(getAllBooking)
  .post(newBook)

router  
  .route('/:id')
  .delete(eliminateBooking)

module.exports = router;
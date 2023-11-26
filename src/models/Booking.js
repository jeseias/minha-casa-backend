const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'House'
  }
});

const Booking = mongoose.model('Bokking', BookingSchema);

module.exports = Booking;
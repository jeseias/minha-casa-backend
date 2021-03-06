const Booking = require('./../models/Booking');

exports.newBook = async (req, res, next) => {
  try {
    const Book = await Booking.create(req.body);

    return res.status(201).json({
      status: 'success',
      Book
    });
  } catch (err) {
    return res.status(500).json({
      status: 'fails',
      err: err.msg
    });
  }
}

exports.getAllBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.find({}).populate('house');

    return res.status(200).json(bookings.reverse());
  } catch (err) {
    return res.status(500).json({
      status: 'fail',
      err: err.msg
    });
  }
}

exports.eliminateBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    return res.status(200).json({ deleted: true })
  } catch (err) {
    return res.status(500).json({
      err: 'Houve um erro tene novamente',
    });
  }
}
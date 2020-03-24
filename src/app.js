const path = require('path');

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

process.env.NODE_ENV === 'development' ? morgan('dev') : '';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(''));

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/api/v1/users', require('./routes/UserRouter'));
app.use('/api/v1/auth', require('./routes/AuthRouter'));
app.use('/api/v1/houses', require('./routes/HouseRouter'));
app.use('/api/v1/bookings', require('./routes/BookingRouter'));
app.use('/api/v1/messages', require('./routes/ContactRouter'));

module.exports = app;
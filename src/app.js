const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

process.env.NODE_ENV === 'development' ? morgan('dev') : '';
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(''));

app.use('/api/v1/users', require('./routes/UserRouter'));
app.use('/api/v1/auth', require('./routes/AuthRouter'));

module.exports = app;
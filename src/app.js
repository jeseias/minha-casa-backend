const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(''));
if(process.env.NODE_ENV === 'development') {
  morgan('dev');
}


module.exports = app;
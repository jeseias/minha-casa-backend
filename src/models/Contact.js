const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  message: String,
  type: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
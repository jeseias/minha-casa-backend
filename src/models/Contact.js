const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  telefone: Number,
  message: String,
  tipo: String,
  done: {
    type: Boolean,
    default: false
  }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  password: String
});

UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.correctPassword = async function(
  candidatePassword, 
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
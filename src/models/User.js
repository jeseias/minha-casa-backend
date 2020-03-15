const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: String,
  telefone: Number,
  password: String
});

UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.correntPassword = async function(
  candidatePassword, 
  userPassord
) {
  return await bcrypt.compare(candidatePassword, userPassord)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
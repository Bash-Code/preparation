const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const userSchema = new mongoose.Schema({
  id: Number,
  login: String,
  password: String,
});

userSchema.methods.comparePassword = function(password) {
  return this.password === password;
};

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

const userModel = mongoose.model('User', userSchema);



module.exports = userModel;


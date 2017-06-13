const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) {return next(saltError);}

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) {return next(hashError);}

      user.password = hash;

      return next();
    })
  });
});

module.exports = mongoose.model('User', UserSchema);
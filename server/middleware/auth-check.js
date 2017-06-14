const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../../config');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {return res.status(401).end();}

    const userId = decoded.sub;

    // check if a user exists
    return User.findById(userId, (err, user) => {
      if (err || !user) {return res.status(401).end();}

      return next();
    })
  });
};
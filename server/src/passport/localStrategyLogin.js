const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const loginStrategy = new LocalStrategy(
  {
    usernameField: 'username' // not necessary, DEFAULT
  },
  function(username, password, done) {
    User.findOne({ 'local.username': username }, (err, userMatch) => {
      if (err) {
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!userMatch.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, userMatch);
    })
  }
)

module.exports = loginStrategy

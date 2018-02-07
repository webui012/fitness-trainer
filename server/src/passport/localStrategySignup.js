const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const signupStrategy = new LocalStrategy(
  {
    usernameField: 'username', // not necessary, DEFAULT
    passwordField: 'password1',
    passReqToCallback : true
  },
  function(req, username, password1, done) {
    User.findOne({ 'local.username': username }, (err, userMatch) => {
      if (err) {
          return done(err);
        }
      if (userMatch) {
        return done(null, false, {
          error: `Sorry, already a user with the username: ${username}`
        });
      } else {
          const newUser = new User({
            'email': req.body.email,
            'currentUserRole': req.body.currentUserRole,
            'local.username': username,
            'local.password1': password1
            });
          newUser.save(err => {
            if (err) {
              throw err;
            }
            return done(null, newUser);
          });
        }
    })
  }
)

module.exports = signupStrategy





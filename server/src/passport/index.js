const passport = require('passport');
const LocalStrategyLogin = require('./localStrategyLogin');
const LocalStrategySignup = require('./localStrategySignup');

const User = require('../models/user');

passport.serializeUser((user, done) => {
  console.log('=== serialize ... called ===');
  console.log(user); // the whole raw user object!
  console.log('---------');
  done(null, { _id: user._id });
})

passport.deserializeUser((id, done) => {
  console.log('DEserialize ... called');
  User.findOne(
    { _id: id },
    'email currentUserRole local.username',
    (err, user) => {
      console.log('======= DESERILAIZE USER CALLED ======');
      console.log(user);
      console.log('--------------');
      done(null, user);
    }
  )
})

// ==== Register Strategies ====
passport.use('local-signup', LocalStrategySignup);
passport.use('local-login', LocalStrategyLogin);


module.exports = passport

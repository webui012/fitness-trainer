const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('../passport');

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    return res.json({ user: req.user });
  } else {
    return res.json({ user: null });
  }
})

router.post(
  '/login',
  function(req, res, next) {
    console.log(req.body);
    console.log('================');
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('POST to /login');
    const user = JSON.parse(JSON.stringify(req.user)); // hack

    const cleanUser = Object.assign({}, user);
    if (cleanUser.local) {
      console.log(`Deleting ${cleanUser.local.password}`);
      delete cleanUser.local.password;
    }
    res.json(cleanUser.currentUserRole);
  }
)

router.post('/logout', (req, res) => {
  console.log("nash user", req.session);
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid'); // clean up!
    return res.json('ALL');
  } else {
    return res.json(req.user.currentUserRole);
  }
})

router.post('/signup', (req, res) => {
  const { username, password1, email, currentUserRole } = req.body

  // ADD VALIDATION
  User.findOne({ 'local.username': username }, (err, userMatch) => {
    if (userMatch) {
      return res.json({
        error: `Sorry, already a user with the username: ${username}`
      })
    }
    const newUser = new User({
      'email': email,
      'currentUserRole': currentUserRole,
      'local.username': username,
      'local.password1': password1
      })
    newUser.save((err, savedUser) => {
      if (err) return res.json(err);
      return res.json(savedUser.currentUserRole);
    })
  })
})


router.get('/get-role', (req, res, next) => {
  console.log('===== Auth user!!======')
  console.log(req.user)
  if (req.user) {
    return res.json(req.user.currentUserRole)
  } else {
    return res.json('ALL')
  }
})




module.exports = router

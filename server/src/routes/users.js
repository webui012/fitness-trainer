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
  passport.authenticate('local-login'),
  (req, res) => {
    res.json(req.user.currentUserRole);
  }
)

router.post(
  '/signup',
  passport.authenticate('local-signup'),
  (req, res) => {
    res.json(req.user.currentUserRole);
  }
)

router.post('/logout', (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie('connect.sid'); // clean up!
    return res.json('ALL');
  } else {
    return res.json({
        error: 'No user to logout'
      })
  }
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

const express = require('express');
const router = express.Router();

router.get('/user', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    return res.json({ user: req.user._id });
  } else {
    return res.json({ user: null });
  }
})

module.exports = router

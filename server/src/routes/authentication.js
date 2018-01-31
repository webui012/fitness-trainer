const express = require('express')
const router = express.Router()

router.get('/get-role', (req, res, next) => {
  console.log('===== Auth user!!======')
  console.log(req)
  if (req.user) {
    return res.json(req.user._id)
  } else {
    return res.json('ALL')
  }
})

module.exports = router

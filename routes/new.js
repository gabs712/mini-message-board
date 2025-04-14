const { Router } = require('express')
const router = Router()

router.get('/', (_, res) => {
  res.render('form')
})

router.post('/', (req, res) => {
  // res.render('form')
})

module.exports = router

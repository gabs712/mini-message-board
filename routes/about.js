const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send('hi')
})

module.exports = router

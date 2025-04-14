const { Router } = require('express')
const router = Router()

router.get('/', (_, res) => {
  res.render('index', { messages: require('../data/messages.js') })
})

module.exports = router

const { Router } = require('express')
const router = Router()
const messages = require('../data/messages.js')

router.get('/', (_, res) => {
  res.render('index', { messages: require('../data/messages.js') })
})

router.get('/:id', (req, res) => {
  const message = messages[req.params.id - 1]
  if (!message) {
    res.status(404).send('Not a valid ID')
    return
  }

  res.render('message', { message: message })
})

module.exports = router

const { Router } = require('express')
const router = Router()

const { getMessageById } = require('../db/queries.js')

router.get('/', (_, res) => {
  res.render('index', { messages: require('../db/messages.js') })
})

router.get('/:id', (req, res) => {
  const message = getMessageById(req.params.id)
  if (!message) {
    res.status(404).send('Not a valid ID')
    return
  }

  res.render('message', { message: message })
})

module.exports = router

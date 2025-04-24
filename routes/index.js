const { Router } = require('express')
const router = Router()

const { getMessageById, getAllMessages } = require('../db/queries.js')

router.get('/', async (_, res) => {
  res.render('index', { messages: await getAllMessages() })
})

router.get('/:id', async (req, res) => {
  const message = await getMessageById(req.params.id)
  if (!message) {
    res.status(404).send('Not a valid ID')
    return
  }

  res.render('message', { message: message })
})

module.exports = router
